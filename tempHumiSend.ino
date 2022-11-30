	
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include "DHT.h"
#include <Arduino.h>
 
// Replace with your network credentials
const char* ssid = "Nord N10 Richard";
const char* password = "12341234";

DHT dht(5, DHT11);
 
ESP8266WebServer server(80);   //instantiate server at port 80 (http port)
 
String page = "";
double data1, data2; 
void setup(void){

  dht.begin();
  
  delay(1000);
  Serial.begin(115200);
  WiFi.begin(ssid, password); //begin WiFi connection
  Serial.println("");
  
  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
  server.on("/", [](){
    page = String(data1) + " " + String(data2);
    server.send(200, "text/html", page);
  });
  
  server.begin();
  Serial.println("Web server started!");
}
 
void loop(void){
  data1 = dht.readHumidity();
  data2 = dht.readTemperature();
  delay(200);
  server.handleClient();
}