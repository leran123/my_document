#include "singleton.h"
#include <iostream>
#include <stdio.h>

 Singleton::_singelton = NULL;

int main()
{
  Singleton *sA = Singleton::GetInstance();
  Singleton *sB = Singleton::GetInstance();
  sA->show();
  sB->show();
}
