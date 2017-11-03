$.get('https://www.reddit.com/r/aww/.json', function (data) {

    // get top 10 posts (skip 1)
    var blogPosts = data.data.children; // main array

    for (var i = 1; i < 11; i++) {

        var article = blogPosts[i];
        var thumbnail = article.data.thumbnail;
        var title = article.data.title;
        var link = article.data.domain;

        //main page div
        var mainPageBox = $("<div id='mainPage'>");

        //individual article divs
        var blogContainer = $("<div id='blogContainer'>");

        mainPageBox.append(blogContainer);


        //thumbnail divs
        var photo = $("<div id='photo'>");

        blogContainer.append(photo);


        //div holding both title and links
        var textContent = $("<div id='textContent'>");

        blogContainer.append(textContent);


        //div holding titles
        var blogTitle = $("<div id='title'>");
        blogTitle.text(blogPosts.title);
        textContent.append(blogTitle);


        //div holding linkss
        var link = $("<div id='link'>");

        textContent.append(link);


        $("#mainPageBox").append(mainPageBox);
    }
});