#include <stdio.h>      /* printf, scanf, puts, NULL */
#include <stdlib.h> 
#include <string>
#include <node.h>

namespace add {

    using v8::Exception;
    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::NewStringType;
    using v8::Number;
    using v8::Object;
    using v8::String;
    using v8::Value;

    void Add(const FunctionCallbackInfo<Value>& args){
        Isolate* isolate = args.GetIsolate();

        // check number of args passed
        if(args.Length() < 2){
            // throw error that is passed back
            isolate->ThrowException(Exception::TypeError(
                String::NewFromUtf8(
                    isolate,
                    "Wrong number of arguments",
                    NewStringType::kNormal
                ).ToLocalChecked()
            ));
            return;
        }

        if(!args[0]->IsNumber() || !args[1]->IsNumber()) {
            isolate->ThrowException(Exception::TypeError(
                String::NewFromUtf8(
                    isolate,
                    "Wrong argument types",
                    NewStringType::kNormal
                ).ToLocalChecked()
            ));
            return;
        }

        int sum;
        for(int i = 0; i < 100000000; i++){
            sum = ( rand() % 100 ) + ( rand() % 100 );
        }

        // perform the operation
        double value = 
            args[0].As<Number>()->Value() + args[1].As<Number>()->Value();
        
        Local<Number> num = Number::New(isolate, value);

        // set the return value using the passed in FucntionCallbackInfo<Value>&
        args.GetReturnValue().Set(num);
    }

    void Init(Local<Object> exports){
        NODE_SET_METHOD(exports, "add", Add);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, Init)

}