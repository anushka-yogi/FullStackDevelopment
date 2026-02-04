import * as fs from "fs/promises";
try {
    await fs.mkdir("nodeJSLearning/5.fsModules/1.promiseApi/creatingFolder");
    console.log("folder Created")

}
catch (error){
    console.log(error)
}