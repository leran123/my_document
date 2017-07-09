#include <stdio.h>
#include <iostream>

using namespace std;
struct Singleton
{
  static Singleton *_singleton; 
private:
  Singleton() {};

public:
 static Singleton * GetInstance()
  {
    if (_singleton == NULL)
    {
       _singleton = new Singleton();
    }

    return _singleton;
  }
  void show()
  {
   std::cout << "show singelton " << std::endl;
  }
};
 
