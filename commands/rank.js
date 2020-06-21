const {
    createCanvas,
    loadImage
} = require("canvas");
const {
    MessageAttachment
} = require("discord.js");
const {
    join
} = require("path");

module.exports.run = async (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const data = await client.db.get(`levelnew-${message.guild.id}-${member.id}`);
    if (!data) return message.reply("this member does not have a rank!");
    // console.log(data)




    let datas = await client.db.getAll(`levelnew-${message.guild.id}`);
    datas = datas.sort((a, b) => b.value.totalXp - a.value.totalXp);
    datas = await Promise.all(datas.map(async (datas, index) => {
        const users = await client.users.fetch(datas.key.split("-")[2]).catch(() => null);
        if (users) {

            if (users.tag == member.user.tag) {
                var rank = index + 1
                const canvas = createCanvas(1000, 333);
                const ctx = canvas.getContext("2d");
                const background = await loadImage(join(__dirname, "..", "img", "background.png"));
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

                // experience progressbar
                ctx.fillStyle = "#ffa541";
                ctx.globalAlpha = 0.9;
                ctx.fillRect(9, 319, (data.xp / (data.level * 40)) * 733, 7);
                ctx.fill();
                // ctx.globalAlpha = 1;
                //Exp 
                ctx.font = "20px Arial";
                ctx.textAlign = "center";
                ctx.fillStyle = "#ffffff";
                ctx.fillText("EXP", 880, 210);
                ctx.fillText(`${data.xp} / ${data.level * 40} XP`, 880, 270);
                //Tag
                ctx.font = "25px Century Gothic"
                ctx.textAlign = "left";
                ctx.fillStyle = "#9a734b";
                ctx.fillText(member.user.discriminator, 560, 185);
                ctx.fillText("#", 540, 185);
                //Name
                ctx.font = "bold 45px Century Gothic"
                ctx.textAlign = "left";
                ctx.fillStyle = "#fcba70";
                name = member.displayName
                if (name.length > 14){
                    name = name.slice(0, 11) + '..'
                }
                ctx.fillText(name, 350, 150);
                //rank
                ctx.font = "bold 22px Century Gothic"
                ctx.textAlign = "left";
                ctx.fillStyle = "#ffffff";
                ctx.fillText("Rank", 590, 270);
                ctx.font = "bold 50px Century Gothic"
                ctx.fillStyle = "#fcba70";
                ctx.fillText(rank, 665, 305);


                //Level
                ctx.font = "20px Arial";
                ctx.fillText("LEVEL", 845, 60);
                ctx.fillStyle = "#fcba70";
                ctx.font = "40px Arial";
                ctx.fillText(data.level, 855, 130);
                // Circle for dp
                ctx.arc(170, 160, 120, 0, Math.PI * 2, true);
                ctx.lineWidth = 3;
                ctx.strokeStyle = "#fcba70";
                ctx.stroke();
                ctx.closePath();
                ctx.clip();
                const avatar = await loadImage(member.user.displayAvatarURL({
                    format: "jpg"
                }));
                ctx.drawImage(avatar, 40, 40, 250, 250);

                const attachment = new MessageAttachment(canvas.toBuffer(), "rank.png");
                message.channel.send(attachment);

            }
        }
    }))




}

module.exports.help = {
    name: "rank",
    description: "View a Member's Rank, mention a username afer command to view another person's rank.",
    private: false
}

module.exports.requirements = {
    ownerOnly: false,
    userPerms: [],
    clientPerms: ["ATTACH_FILES"]
}

module.exports.limits = {
    rateLimit: 3,
    cooldown: 6e4
}