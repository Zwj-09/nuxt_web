interface LyricType {
  singer: string;
  creator: string;
  lyric: string;
}

const lyricList = [
  {
    singer: '周杰伦',
    creator: '方文山',
    lyric: `[00:00.02]周杰伦-兰亭序
  [00:04.82]作词：方文山　作曲：周杰伦
  [00:25.63]兰亭临帖 行书如行云流水
  [00:31.99]月下门推 心细如你脚步碎
  [00:38.88]忙不迭 千年碑易拓 却难拓你的美
  [00:45.64]真迹绝 真心能给谁
  [00:51.01]牧笛横吹 黄酒小菜有几碟
  [00:56.80]夕阳余晖 如你的羞怯似醉
  [01:03.24]摹本易写 而墨香不退与你共留余味
  [01:11.11]一行朱砂 到底圈了谁
  [01:16.40]无关风月 我题序等你回
  [01:22.49]悬笔一绝 那岸边浪尖叠
  [01:28.94]情字何解 怎落笔都不对
  [01:35.19]而我独缺 你一生的了解
  [02:06.59]弹指岁月 倾城顷刻间烟灭
  [02:12.78]青石板街 回眸一笑你婉约
  [02:19.23]恨了没 你摇头轻叹 谁让你蹙著眉
  [02:26.43]而深闺 徒留胭脂味
  [02:32.44]人雁南飞 转身一瞥妳噙泪
  [02:38.16]掬一把月 手揽回忆怎么睡
  [02:44.69]又怎么会 心事密缝绣花鞋针针怨怼
  [02:51.99]若花怨蝶 你会怨著谁
  [02:57.61]无关风月 我题序等妳回
  [03:03.63]悬笔一绝 那岸边浪千叠
  [03:09.58]情字何解 怎落笔都不对
  [03:16.03]而我独缺 妳一生的了解
  [03:22.57]无关风月 我题序等你回
  [03:30.57]手书无愧 无惧人间是非
  [03:36.67]雨打蕉叶 又潇潇了几夜
  [03:42.91]我等春雷 来提醒你爱谁
  `,
  },
  {
    singer: '陈奕迅',
    creator: '周杰伦',
    lyric: `
[00:00] 淘汰 – 陈奕迅 (Eason Chan)
[00:08] 词：周杰伦
[00:17] 曲：周杰伦
[00:26] 编曲：C.Y.Kong
[00:35] 我说了所有的谎
[00:39] 你全都相信
[00:43] 简单的我爱你
[00:46] 你却老不信
[00:51] 你书里的剧情
[00:55] 我不想上演
[00:58] 因为我喜欢
[01:01] 喜剧收尾
[01:08] 我试过完美放弃
[01:12] 的确很踏实
[01:15] 醒来了梦散了
[01:19] 你我都走散了
[01:23] 情歌的词何必押韵
[01:27] 就算我是K歌之王
[01:31] 也不见得把
[01:33] 爱情唱得完美
[01:38] 只能说我输了
[01:42] 也许是你怕了
[01:46] 我们的回忆没有皱褶
[01:51] 你却用离开烫下句点
[01:54] 只能说我认了
[01:58] 你的不安赢得你信任
[02:03] 我却得到你安慰的淘汰
[02:25] 我试过完美放弃
[02:29] 的确很踏实
[02:32] 醒来了梦散了
[02:36] 你我都走散了
[02:40] 情歌的词何必押韵
[02:44] 就算我是K歌之王
[02:48] 也不见得把
[02:50] 爱情唱得完美
[02:55] 只能说我输了
[02:59] 也许是你怕了
[03:03] 我们的回忆没有皱褶
[03:08] 你却用离开烫下句点
[03:11] 只能说我认了
[03:15] 你的不安赢得你信任
[03:21] 我却得到你安慰的淘汰
[03:44] 只能说我输了
[03:48] 也许是你怕了
[03:52] 我们的回忆没有皱褶
[03:57] 你却用离开烫下句点
[04:00] 只能说我认了
[04:04] 你的不安赢得你信任
[04:09] 我却得到你安慰的淘汰
  `,
  },
];

const lyRicData: LyricType = lyricList[1];

export default () => {
  return lyRicData;
};
