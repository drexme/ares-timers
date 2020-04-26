const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: false});
const token = process.env.token;
const PREFIX = "!";

client.on('ready', () => {
    console.log("The client is active and ready to go!");
});

client.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");
    let down = '#ff0000';
    let window = '#eeff00';
    let up = '#00ff1e';
    const channel = client.channels.cache.get('703837097278308412');
    const bossNotice = client.channels.cache.get('703837546248929361');

    switch (args[0]) {

        case "ds":
            if(args[1] === 'down'){
                bossNotice.send('@everyone DS has been killed and status has been updated to Not in Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(down)
                .setThumbnail('https://i.imgur.com/coHAAMx.png')
                .setTitle("\:no_entry_sign: Not In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Demon Servant'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'window'){
                bossNotice.send('@everyone DS status has been updated to In Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(window)
                .setThumbnail('https://i.imgur.com/coHAAMx.png')
                .setTitle("\:hourglass: In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Demon Servant'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},  
                )                
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'up'){
                bossNotice.send('@everyone DS has been spotted and status has been changed to Spawned');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(up)
                .setThumbnail('https://i.imgur.com/coHAAMx.png')
                .setTitle("\:crossed_swords: In battle/Spawned")
                .addFields(
                    { name: 'Boss Name', value: 'Demon Servant'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else {
                bossNotice.send("@everyone Invalid status. Please choose the correct one: up, window, down. Check !status for more info.");
            }
        break;
        case "behe":
            if(args[1] === 'down'){
                bossNotice.send('@everyone Behemoth has been killed and status has been updated to Not in Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(down)
                .setThumbnail('https://i.imgur.com/ujgBtXQ.png')
                .setTitle("\:no_entry_sign: Not In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Behemoth'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'window'){
                bossNotice.send('@everyone Behemoth status has been updated to In Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(window)
                .setThumbnail('https://i.imgur.com/ujgBtXQ.png')
                .setTitle("\:hourglass: In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Behemoth'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},  
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'up'){
                bossNotice.send('@everyone Behemoth has been spotted and status has been changed to Spawned');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(up)
                .setThumbnail('https://i.imgur.com/ujgBtXQ.png')
                .setTitle("\:crossed_swords: In battle/Spawned")
                .addFields(
                    { name: 'Boss Name', value: 'Behemoth'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else {
                bossNotice.send("@everyone Invalid status. Please choose the correct one: up, window, down. Check !status for more info.");
            }
        break;
        case "ogre":
            if(args[1] === 'down'){
                bossNotice.send('@everyone Ogre Master has been killed and status has been updated to Not in Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(down)
                .setThumbnail('https://i.imgur.com/fkfp4qJ.png')
                .setTitle("\:no_entry_sign: Not In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Ogre Master'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'window'){
                bossNotice.send('@everyone Ogre Master status has been updated to In Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(window)
                .setThumbnail('https://i.imgur.com/fkfp4qJ.png')
                .setTitle("\:hourglass: In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Ogre Master'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},    
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'up'){
                bossNotice.send('@everyone Ogre Master has been spotted and status has been changed to Spawned');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(up)
                .setThumbnail('https://i.imgur.com/fkfp4qJ.png')
                .setTitle("\:crossed_swords: In battle/Spawned")
                .addFields(
                    { name: 'Boss Name', value: 'Ogre Master'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"}, 
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else {
                bossNotice.send("@everyone Invalid status. Please choose the correct one: up, window, down. Check !status for more info.");
            }
        break;
        case "manti":
            if(args[1] === 'down'){
                bossNotice.send('@everyone Manticore has been killed and status has been updated to Not in Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(down)
                .setThumbnail('https://i.imgur.com/OuKJU6z.png')
                .setTitle("\:no_entry_sign: Not In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Manticore'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'window'){
                bossNotice.send('@everyone Manticore status has been updated to In Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(window)
                .setThumbnail('https://i.imgur.com/OuKJU6z.png')
                .setTitle("\:hourglass: In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Manticore'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'up'){
                bossNotice.send('@everyone Manticore has been spotted and status has been changed to Spawned');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(up)
                .setThumbnail('https://i.imgur.com/OuKJU6z.png')
                .setTitle("\:crossed_swords: In battle/Spawned")
                .addFields(
                    { name: 'Boss Name', value: 'Manticore'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else {
                bossNotice.send("@everyone Invalid status. Please choose the correct one: up, window, down. Check !status for more info.");
            }
        break;
        case "bd":
            if(args[1] === 'down'){
                bossNotice.send('@everyone Bone Drake has been killed and status has been updated to Not in Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(down)
                .setThumbnail('https://i.imgur.com/gINMCjp.png')
                .setTitle("\:no_entry_sign: Not In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Bone Drake'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'window'){
                bossNotice.send('@everyone Bone Drake status has been updated to In Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(window)
                .setThumbnail('')
                .setTitle("\:hourglass: In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Bone Drake'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                    
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'up'){
                bossNotice.send('@everyone Bone Drake has been spotted and status has been changed to Spawned');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(up)
                .setThumbnail('')
                .setTitle("\:crossed_swords: In battle/Spawned")
                .addFields(
                    { name: 'Boss Name', value: 'Bone Drake'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else {
                bossNotice.send("@everyone Invalid status. Please choose the correct one: up, window, down. Check !status for more info.");
            }
        break;
        case "bapho":
            if(args[1] === 'down'){
                bossNotice.send('@everyone Baphomet has been killed and status has been updated to Not in Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(down)
                .setThumbnail('https://i.imgur.com/1NcGj2l.png')
                .setTitle("\:no_entry_sign: Not In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Baphomet'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'window'){
                bossNotice.send('@everyone Baphomet status has been updated to In Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(window)
                .setThumbnail('https://i.imgur.com/1NcGj2l.png')
                .setTitle("\:hourglass: In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Baphomet'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"}, 
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'up'){
                bossNotice.send('@everyone Baphomet has been spotted and status has been changed to Spawned');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(up)
                .setThumbnail('https://i.imgur.com/1NcGj2l.png')
                .setTitle("\:crossed_swords: In battle/Spawned")
                .addFields(
                    { name: 'Boss Name', value: 'Baphomet'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else {
                bossNotice.send("@everyone Invalid status. Please choose the correct one: up, window, down. Check !status for more info.");
            }
        break;
        case "od":
            if(args[1] === 'down'){
                bossNotice.send('@everyone Ocean Dragon has been killed and status has been updated to Not in Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(down)
                .setThumbnail('https://i.imgur.com/s03Z9sm.png')
                .setTitle("\:no_entry_sign: Not In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Ocean Dragon'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'window'){
                bossNotice.send('@everyone Ocean Dragon status has been updated to In Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(window)
                .setThumbnail('https://i.imgur.com/s03Z9sm.png')
                .setTitle("\:hourglass: In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Ocean Dragon'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},  
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'up'){
                bossNotice.send('@everyone Ocean Dragon has been spotted and status has been changed to Spawned');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(up)
                .setThumbnail('https://i.imgur.com/s03Z9sm.png')
                .setTitle("\:crossed_swords: In battle/Spawned")
                .addFields(
                    { name: 'Boss Name', value: 'Ocean Dragon'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else {
                bossNotice.send("@everyone Invalid status. Please choose the correct one: up, window, down. Check !status for more info.");
            }
        break;
        case "vargiel":
            if(args[1] === 'down'){
                bossNotice.send('@everyone Vargiel has been killed and status has been updated to Not in Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(down)
                .setThumbnail('https://i.imgur.com/MOWiCo9.png')
                .setTitle("\:no_entry_sign: Not In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Vargiel'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'window'){
                bossNotice.send('@everyone Vargiel status has been updated to In Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(window)
                .setThumbnail('https://i.imgur.com/MOWiCo9.png')
                .setTitle("\:hourglass: In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Vargiel'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},  
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'up'){
                bossNotice.send('@everyone Vargiel has been spotted and status has been changed to Spawned');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(up)
                .setThumbnail('https://i.imgur.com/MOWiCo9.png')
                .setTitle("\:crossed_swords: In battle/Spawned")
                .addFields(
                    { name: 'Boss Name', value: 'Vargiel'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else {
                bossNotice.send("@everyone Invalid status. Please choose the correct one: up, window, down. Check !status for more info.");
            }
        break;
        case "mino":
            if(args[1] === 'down'){
                bossNotice.send('@everyone Minotaur Master has been killed and status has been updated to Not in Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(down)
                .setThumbnail('https://i.imgur.com/2weAkhw.png')
                .setTitle("\:no_entry_sign: Not In Window")
                .addFields(
                    { name: 'Boss Name', value: 'MinoTaur Master'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'window'){
                bossNotice.send('@everyone Minotaur Master status has been updated to In Window!');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(window)
                .setThumbnail('https://i.imgur.com/2weAkhw.png')
                .setTitle("\:hourglass: In Window")
                .addFields(
                    { name: 'Boss Name', value: 'Minotaur Master'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else if(args[1] === 'up'){
                bossNotice.send('@everyone Minotaur Master has been spotted and status has been changed to Spawned');
                let sEmbed = new Discord.MessageEmbed()
                .setColor(up)
                .setThumbnail('https://i.imgur.com/2weAkhw.png')
                .setTitle("\:crossed_swords: In battle/Spawned")
                .addFields(
                    { name: 'Boss Name', value: 'Minotaur Master'},
                    { name: 'Status changed by', value: "<@" + message.author.id + ">"},
                )
                .setTimestamp();
                channel.send({embed: sEmbed});
            }else {
                bossNotice.send("@everyone Invalid status. Please choose the correct one: up, window, down. Check !status for more info.");
            }
        break;
        case "status":
            message.reply("\nup - Means the boss has spawned and is ready to be down\ndown - Means the boss has been killed and is no longer in window.\nwindow - Means the boss is ready to be camped when possible.");
        break;
        case "bosslist":
            message.reply("\nds - Demon Servant\nvargiel - Vargiel(Black Dragon\nbehe - Behemoth\nogre - Ogre Master\nmanti - Manticore\nbd - Bone Drake\nbapho - Baphomet\nod - Ocean Dragon\nmino - Minotaur Master");
        break;
        case "help":
            message.reply("Pick a boss from !bosslist and choose a !status to update its current whereabouts.\nFor example: !ds down");
        break;
    }
});

client.login(token);
