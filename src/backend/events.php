<?php
$userAgent = 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31' ;
$ch = curl_init("https://www.facebook.com/events/ical/upcoming/?uid=UID&key=KEY");
$options = array(
    CURLOPT_CONNECTTIMEOUT => 20 , 
    CURLOPT_USERAGENT => $userAgent,
    CURLOPT_AUTOREFERER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_SSL_VERIFYPEER => 0 ,
    CURLOPT_SSL_VERIFYHOST => 0
);

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

curl_setopt_array($ch, $options);
$kl = curl_exec($ch);
curl_close($ch);
$last_line = "_:_";
$current_date = strtotime("now");
$events = [];
foreach(preg_split("/((\r?\n)|(\r\n?))/", $kl) as $line){
  if (strpos($line, " ") === 0) {
    $last_line = $last_line.substr($line, 1);
    continue;
  }

  $exploded = explode(':', $last_line, 2);
  //$exploded[1] = str_replace("\\n", "<br/>", $exploded[1]);
  $exploded[1] = str_replace("\\,", ",", $exploded[1]);
  //echo $exploded[1];
  //echo str_contains($line, 'SUMMARY:');
  if (strcmp($exploded[0], 'SUMMARY') == 0) {
    $title = $exploded[1];
  }
  if (strcmp($exploded[0], 'DTSTART') == 0) {
    $t = strtotime($exploded[1]);
    $time = date('d.m.y H:i',$t);
  }
  if (strcmp($exploded[0], 'URL') == 0) {
    $url = $exploded[1];
  }
  if (strcmp($exploded[0], 'DESCRIPTION') == 0) {
    $description = $exploded[1];
    if (!(strpos($description, "https://www.facebook.com/events/") === false)) {
      $description = substr($description, 0, strpos($description, "https://www.facebook.com/events/"));
    }
  }
  if ((strcmp($exploded[0], 'END') == 0 ) AND (strcmp($exploded[1], 'VEVENT') == 0) AND ($t > $current_date)) {
    //echo $time." -- ".$title." -- ".$url.'<br>';
    array_push($events, ["url" => $url, "title" => $title, "description" => $description, "time" => $time]);
  }
  $last_line = $line;
}
$events = array_reverse($events);
echo '{"events": [';
$entries = '';
foreach($events as $event){
    $desc = strip_tags($event["description"]);
    $desc = str_replace("\\n", "<br/>", $desc);
    $entries = $entries . '
    {
      "title": '.json_encode(strip_tags($event["title"])).',
      "description": '.json_encode($desc).',
      "time": '.json_encode($event["time"]).',
      "url": '.json_encode($event["url"]).'
    },';
}
echo substr($entries, 0, strlen($entries) - 1);
echo ']}';
?>
