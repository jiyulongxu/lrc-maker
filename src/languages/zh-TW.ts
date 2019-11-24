export const language = {
    languageName: "繁體中文",

    app: {
        name: "歌詞滾動姬",
        fullname: "小明的歌詞滾動姬",
    },

    header: {
        home: "主頁",
        editor: "編輯",
        synchronizer: "同步",
        gist: "Githu Gist",
        preferences: "設定",
    },

    audio: {
        loadAudio: "匯入音訊",
        play: "播放",
        pause: "暫停",
        replay5s: "倒轉 5s",
        forward5s: "快轉 5s",
        resetRate: "重設播放速度",
        error: ["音訊錯誤", "音訊請求被用戶終止", "音訊網路請求錯誤", "音訊解碼錯誤", "瀏覽器無法支援此音訊格式"],
    },

    loadAudio: {
        file: "檔案",
        url: "URL",
        loadFile: "點選這裡或直接拖放音訊檔案到這個頁面",
    },

    home: {
        tips: "提示",
        tipForLyricText: "切換到編輯頁面，黏貼歌詞文本。",
        tipForUploadAudio: "點選左下方按鈕，匯入音訊檔案。",
        tipForSynchronizer: "切換到同步頁面，開始製作滾動歌詞吧～",
        tipTopLeft: "點選這裡可以回到這個幫助頁面",
        tipTopRight: "點選這裡切換頁面",
        tipBottomLeft: "這裡可以加載音訊，控制播放",
        tipBottomRight: "這裡可以調節播放速度",
    },

    editor: {
        metaInfo: "元數據",
        album: "所屬專輯",
        title: "歌曲名",
        artist: "藝人名",
        uploadText: "匯入文本",
        copyText: "全選拷貝",
        downloadText: "下載",
        saveToGist: "保存到 Github Gist",
        saveFileName: "檔名",
        utils: "實用工具",
    },

    gist: {
        newTokenTip: "歌詞滾動姬使用 Github Token 來存取 Github Gist 上的數據",
        newTokenButton: "生成新的 Github Token",
        newGistTip: "創建一個新的 Gist 儲存庫或指定一個已存在的 Gist id",
        newGistRepoButton: "創建一個新的 Gist 儲存庫",
        gistIdPlaceholder: "或指定一個已存在的 Gist id",
        info: "資訊",
        clearTokenAndGist: "清除 Github Token 和 Gist id",
    },

    preferences: {
        version: "版本",
        commitHash: "Commit hash",
        updateTime: "更新時間",
        repo: "專案地址",
        help: "關於 & 幫助",
        language: "語言",
        builtInAudio: "使用瀏覽器內建音訊播放器",
        spaceButton: "啓用螢幕 Space 鍵",
        themeColor: "主題顏色",
        lrcFormat: "歌詞輸出格式控制",
        fixed: "時間標籤小數點",
        leftSpace: "左側空格",
        rightSpace: "右側空格",
        clearCache: "清除快取",
    },

    notify: {
        audioLoaded: "音訊已匯入",
    },
};
