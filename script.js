function tweetMessage() {
    const message = "365 MV PREMIERE \n#2024_365NichinoKamihikoukiTH ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
}  
