function postAnalytics(posts) {

    // Input validation first
    if (!Array.isArray(posts)) return "Invalid input";

    let totalLikes = 0;
    let totalComments = 0;
    let totalShares = 0;

    for (let post of posts) {
        // Each post must have numeric likes, comments, and shares
        if (
            typeof post.likes !== 'number' ||
            typeof post.comments !== 'number' ||
            typeof post.shares !== 'number') { return "Invalid input"; }

        totalLikes += post.likes;
        totalComments += post.comments;
        totalShares += post.shares;
    }

    return { totalLikes, totalComments, totalShares };
}


console.log(postAnalytics([
    { likes: 100, comments: 20, shares: 10 },
    { likes: 50, comments: 10, shares: 5 }]));

console.log(postAnalytics([
    { likes: 200, comments: 30, shares: 25 },
    { likes: 100, comments: 20, shares: 10 }]));

console.log(postAnalytics([{ likes: "abc", comments: 20, shares: 5 }]));
