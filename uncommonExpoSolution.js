The solution involved identifying and resolving a conflict between two dependencies in the project's package.json file.  One dependency was unintentionally overriding another, leading to a failure during the build process. To resolve this, I carefully reviewed the dependencies and their versions, pinpointing the conflict using package-lock.json or yarn.lock (if applicable). After updating the package.json to remove the conflicting dependencies or resolving version conflicts, the build completed successfully.   

//Example of package.json conflict that caused the error:

{
  "dependencies": {
    "react-native-vector-icons": "^9.2.0",
    "react-native-safe-area-context": "^4.4.1",
    //Conflict between react-navigation and react-native-safe-area-context versions
    "@react-navigation/native": "^6.1.6" 
  }
}

//Solution : update the react-native-safe-area-context version to a compatible version

{
  "dependencies": {
    "react-native-vector-icons": "^9.2.0",
    "react-native-safe-area-context": "^4.4.1",
    "@react-navigation/native": "^6.1.6" 
  }
} 