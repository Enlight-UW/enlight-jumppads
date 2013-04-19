const int pad1Pin = 2;
const int pad2Pin = 3;
const int pad3Pin = 4;
const int pad4Pin = 6;
const int pad5Pin = 8;
const int pad6Pin = 10;
const int pad7Pin = 11;
const int pad8Pin = 12;

void setup() {
  // put your setup code here, to run once:
  pinMode(pad1Pin, INPUT);
  pinMode(pad2Pin, INPUT);
  pinMode(pad3Pin, INPUT);
  pinMode(pad4Pin, INPUT);
  pinMode(pad5Pin, INPUT);
  pinMode(pad6Pin, INPUT);
  pinMode(pad7Pin, INPUT);
  pinMode(pad8Pin, INPUT);
  
  Serial.begin(9600);
}

int last1 = LOW;
int last2 = LOW;
int last3 = LOW;
int last4 = LOW;
int last5 = LOW;
int last6 = LOW;
int last7 = LOW;
int last8 = LOW;

void loop() {
  // put your main code here, to run repeatedly: 
  int cur1 = digitalRead(pad1Pin);
  int cur2 = digitalRead(pad2Pin);
  int cur3 = digitalRead(pad3Pin);
  int cur4 = digitalRead(pad4Pin);
  int cur5 = digitalRead(pad5Pin);
  int cur6 = digitalRead(pad6Pin);
  int cur7 = digitalRead(pad7Pin);
  int cur8 = digitalRead(pad8Pin);
 
  Serial.print((cur1 == last1 ? '0' : '1'));
  Serial.print((cur2 == last2 ? '0' : '1'));
  Serial.print((cur3 == last3 ? '0' : '1'));
  Serial.print((cur4 == last4 ? '0' : '1'));
  Serial.print((cur5 == last5 ? '0' : '1'));
  Serial.print((cur6 == last6 ? '0' : '1'));
  Serial.print((cur7 == last7 ? '0' : '1'));
  Serial.print((cur8 == last8 ? '0' : '1'));
  Serial.print('\n');
  last1 = cur1;
  last2 = cur2;
  last3 = cur3;
  last4 = cur4;
  last5 = cur5;
  last6 = cur6;
  last7 = cur7;
  last8 = cur8;
  
  delay(350);
}
