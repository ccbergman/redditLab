$.get('https://www.reddit.com/r/aww/.json', function (data) {

    var blogPosts = data.data.children;

    for (var i = 1; i < 11; i++) { //skip first blog

        var article = blogPosts[i];
        var blogEl = $("<section>");

        var blogContainer = $("<div id='blogContainer'>");
        blogEl.append(blogContainer);

        var textContent = $("<div id='textContent'>");
        blogContainer.append(textContent);

        var thumbnail = article.data.thumbnail;
        var photo = $("<div id='photo'>");
        photo.append("<img src=" + thumbnail + ">");
        blogContainer.append(photo);

        var title = article.data.title;
        var blogTitle = $("<h3 id='title'>");
        blogTitle.append(title);
        textContent.append(blogTitle);

        var link = article.data.url;
        var blogLink = $("<a href='" + link + "'>Want to read the full blog? Click me!</a>");
        textContent.append(blogLink);

        $("#mainPageBox").append(blogEl);
    }
});