interface LyricType {
  singer: string;
  creator: string;
  lyric: string;
}

const timeReg = /\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?]/;

export const parseLyrics = (lyricData: LyricType | null) => {
  const splitLyric = lyricData?.lyric.split('\n') || [];
  if (splitLyric.length) {
    return splitLyric.map((lyric: string) => {
      const result = timeReg.exec(lyric);
      let time = 0;

      if (result) {
        const minutes = parseInt(result[1], 10);
        const seconds = parseInt(result[2], 10);
        const milliseconds = result[3] ? parseInt(result[3], 10) : 0;
        time =
          minutes * 60 * 1000 +
          seconds * 1000 +
          (result[3]?.length === 2 ? milliseconds * 10 : milliseconds);
      }

      return {
        time,
        text: lyric.replace(timeReg, '').trim(),
      };
    });
  } else {
    return [];
  }
};
