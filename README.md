# GPT-CL
**Write Code Effortlessly!**
GPT-CL is an AI-driven natural language programming language (NLPL) that allows you to code without needing to learn a traditional programming language. With GPT-CL, programming concepts and operations are described using simple English, making it easily readable and understandable for both non-programmers and experts alike.
## Introduction


GPT-CL, also known as Layman's Code, is a natural language programming language (NLPL) designed for increased accessibility and readability for both non-programmers and experts alike. By using English to describe programming concepts and operations, GPT-CL pseudocode broadens the reach of programming to a wider audience.

The tool outlined in this readme is simple to install and use.

## OpenAI Key

You will need an OpenAI Key to use GPT-CL and set your environment variable for OPEN_API_KEY to your api key.

For example on windows:
```
set OPEN_API_KEY=xx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

or 

For mac / linux:
```
export OPEN_API_KEY=xx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Installing

Requirements: 
 - A modern version of Node JS which you can download from [nodejs.org](https://nodejs.org/)
 - An OpenAI Api Key which you can get from [openai.com](https://openai.com/)
 - An Internet connection

Once the requirements above have been met, you can install GPT-CL by typing the following command:

```
npm install -g gpt-cl
```

This will install the command-line tool **`gptcl`** on your machine.


## Running

GPT-CL can be run in two modes: as a command-line tool or embedded into a Node.js project.

## Command Line Tool:
```
gptcl run
```

Super Structure

The Super Structure is a key component of GPT-CL, which is used to define the desired output folder and file structure that GPT-CL generates. The Super Structure, also known as SuperStructure.yaml, is a project mapping tool that allows you to define a file and folder template structure in a human-readable format, similar to a graphical version of a drop-down menu of files and folders.

The Super Structure represents the structure of your project that GPT-CL produces from your created .GPT files. This allows you to build out entire projects by simply running the command-line tool in the directory where your SuperStructure.yaml file and source .GPT files are located. Every GPT-CL project should have at least one SuperStructure.yaml file and one file defined in YAML format, such as index.gpt.

You can download the HelloWorld example project or use the command-line tool switch **`init`** in an empty folder. For example:
```
gptcl init
```
Keep in mind that an OpenAI API key is required to use GPT-CL, which can be easily obtained from openai.com.

## Syntax

The syntax of GPT-CL pseudocode closely resembles natural language and is parseless. It utilizes keywords and phrases to describe operations and statements, and employs indentation to convey the structure of the code. Unlike traditional programming languages, GPT-CL pseudocode does not require strict adherence to syntax and encourages expressiveness and creativity in the conceptualization of ideas as written language. This allows for the creation of GPT-CL pseudocode using concepts from any programming language, or even simple English sentences, with no prior programming experience required.

Note:
> Please note that while the use of "//" before natural language statements is considered good practice, it is not required.

## GPT File Syntax

**.GPT** files are used to structure output for different programming languages and platforms. The syntax for these files to write a basic **package.json script** in GPT-CL as the file **package.gpt** is as follows:
```
#
# GPT-Lamens
# File: package.json
# Title: Hello World NodeJS package.json
# Input Lang: GPT-CL Pseudocode (Layman's Code)
# Output Lang: NodeJS Package JSON
# Code Comments: none
```

It is important to maintain this structure at the top of every **.GPT** file, and to modify it as needed for the desired output. For example, the above **.GPT** code will generate a "Hello World" **package.json** file compatible with Node.js npm.

If you want to target another platform, such as the Python programming language, you would simply change the "Title" to "Hello World Python requirements.txt" and the "Output" to "Python Requirements Text".

The keywords "File:", "Title:", "Input Lang:", "Output Lang:", and "Code Comments:" instruct GPT on how to structure the output. It is not recommended to alter this structure unless you are an advanced prompt engineer.


# Coding Concepts

GPT-CL does not have a strict syntax so the following are just some examples of how to assign and use variables, functions, and more.

## Variables

Variables are used to store data in GPT-CL pseudocode. They are declared using the keyword **`var`**, followed by a name for the variable. For example:

```
// set a variable named someValue to 1
```

```
someValue = 1
```

```
var myVariable = 5;
```

```
const myImmutableVariable = 5;
```

```
int age = 21;
```


## Functions

Functions are used to group a set of statements together and perform a specific task. They are declared using the keyword **`function`**, followed by a name for the function and a set of parentheses. For example:

```
// write a function named myFunction that has the comment // function code here
```

```
function my Function:
  // function code here
```

```
function myFunction() {
  // function code here
}
```

```
async fn myFunction(foo) {
  // function code here with foo defined
}
```

## Loops

Loops are used to repeat a set of statements a specific number of times or while a certain condition is met. The **`for`** and **`while`** keywords are used to indicate the type of loop being used. For example:

```
loop myvar until it has a value of 10 starting from 0:
  // loop code here
```

```
for (var i = 0; i < 10; i++) {
  // loop code here
}
```
```
while (myVariable < 10) {
  // loop code here
}
```
```
async each (myVariableArray) {
  // loop code here
}
```

## Conditionals

Conditionals are used to perform different actions based on a specific condition. The **`if`** and **`else`** keywords are used to indicate the type of conditional being used. For example:

```
if myVariable euqals 5 run some code if myVariable is 5 then run some other code when it is not 5
```

```
if myVariable = 5
  // code to run if myVariable is 5
else
  // code to run if myVariable is not 5
```

```
if (myVariable == 5) {
  // code to run if myVariable is 5
} else {
  // code to run if myVariable is not 5
}
```

## Requires / Includes

Requires or Includes work by including another files code into the current code. Please note when using require or include that you should always include the filetype defined in your SuperStructure.yaml file. This will ensure the require is linked up properly in the final build output.

```
require(test.js)
```
```
include * from test.js
```

## Usage

GPT-CL pseudocode can be used for a variety of purposes, such as explaining programming concepts to beginners, prototyping and planning code, and generating code from natural language inputs. It can also be used as an intermediate step in code generation, converting GPT-CL pseudocode into a specific programming language. It does not always generate the desired output as the language model may misunderstand you or output undesired results. As such all generated builds should have a good test system in place and are always double checked for continuity of output manually. Generally speaking it is possible to dial in on your .gpt files to yield almost flawless results every time.

## Conclusion

GPT-CL pseudocode is a natural language based programming language that is designed to be easy to read and understand for non-programmers. It uses a simplified version of English to describe programming concepts and operations, making it accessible to a wider audience. GPT-CL pseudocode can be used for a variety of purposes, such as explaining programming concepts to beginners, prototyping and planning code, and generating code from natural language inputs.

## Contributing
Fork and open up a PR with a feature that adds some sort of improved functionality Or fork it and customize it to your hearts content.
