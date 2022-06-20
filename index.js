const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

const GoStumble = (auth) => new Promise((resolve, reject) => {

    fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
        method: 'GET',
        headers: {
            'authorization': auth
        }
    })
    .then(res => res.text())
    .then(data=> {
        resolve(data);
    })
    .catch(err => {
        reject(err);
    });

});

(async () => {

    console.log(` ${chalk.red(`
╭━━━━━━━━━━━━━╮
┃╱╱╱╱╱╱╱╱┏┓╱╱╱┃
┃╱╱╱┏┓╱╱┏╯┃╱╱╱┃
┃╱╱┏┛┗┓╱┗┓┃╱╱╱┃
┃╱╱┗┓┏┛╱╱┃┃╱╱╱┃
┃╱╱╱┗┛╱╱╱┃┃╱╱╱┃
┃╱╱╱╱╱╱╱╱┗┛╱╱╱┃
╰━━━━━━━━━━━━━ `)}
${chalk.green('THANKS TO')} ${chalk.yellow(' : DKMPOSTOR,ESKEY,BINZ,ZAKY')}
${chalk.white('STATUS ')} ${chalk.green('AKTIF')}
${chalk.red('Harap Gunakan Dengan Bijak')} - ${chalk.green('Cheater Stumble Guys')}
`);

    const auth = '{"DeviceId":"5ef8a667ba90ce08ae8703bfd75d01dc","GoogleId":"","FacebookId":"","Token":"FamZEIcNjvMqK1s5lizaPVnuMyFDnycw","Timestamp":1655763765,"Hash":"9d480078a8ae6284eaa3cd2e5279deb6fcc7f5dc"}'
    console.log('');

    while (true) {

        const result = await GoStumble(auth);
        if (!result) {

            console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] Cookie Eror Mungkin Telah Berakhir !`));
            break;

        } else if (result.includes('User')) {

            const data = JSON.parse(result);
            const username = data.User.Username;
            const country = data.User.Country;
            const trophy = data.User.SkillRating;
            const crown = data.User.Crowns;
            
            console.log(chalk.green(`\r[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.yellow(`Trophy : ${trophy}`)} | ${chalk.red(`Crown : ${crown}`)} ${chalk.green('OK200')}`));
            
        } else if (result == 'MAMPUS HARIMU SURAM!!') {

            console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] Banned !`));
            break;
            
        } else if (result == 'SERVER_ERROR') {

            continue;
            
        }
    }
    

})();
