const { exec } = require("child_process");
exec(
    "java -Xmx512m -jar zap-2.7.0.jar -version",
    {
        cwd: process.env.PROGRAMFILES + "\\OWASP\\Zed Attack Proxy\\"
    },
    (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    }
);
