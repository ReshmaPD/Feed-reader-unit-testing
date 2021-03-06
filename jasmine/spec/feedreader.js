/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        //based of allfeeds are defined spec
        it('url is defined', function() {
            allFeeds.forEach( function(feed) {
                expect(feed.url).toBeDefined(); //feed url should be defined

                expect(feed.url.length).not.toBe(0); //url should have some length

            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        //based of allfeeds are defined spec
        it('name is defined', function() {
            allFeeds.forEach( function(feed) {
                expect(feed.name).toBeDefined();//feed name should be defined

                expect(feed.name.length).not.toBe(0);//name should have some length

            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            // ref: https://api.jquery.com/hasclass/
            //select the body and check if it has class menu-hidden
            expect($("body").hasClass("menu-hidden")).toBe(true); //true===true
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('shows or hides when clicked', function() {
            const menuIcon = $(".menu-icon-link");
            //on document load, menu is hidden by default
            //menu-hidden class toggles when menuIcon is clicked
            //we stimulate click using jquery click() method to check if menuIcon triggers toggles as expected

            menuIcon.click();//first click-show menu
            expect($("body").hasClass("menu-hidden")).toBe(false); //false===false

            menuIcon.click();//second click-hide menu
            expect($("body").hasClass("menu-hidden")).toBe(true); //true===true
        });

      });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has at least one entry', function(done) {
            const feedEntry = $(".feed .entry"); //select the entry class within the feed class
            console.log('entry',feedEntry);
            expect(feedEntry.length).toBeGreaterThan(0);
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        let oldFeed,
            newFeed;

            beforeEach( function(done) {
                loadFeed(0, function() {
                    //fetch feed
                    //store content in oldFeed
                    //html()-This method uses the browser's innerHTML property
                  oldFeed = $(".feed").html(); //select the oldFeed's innerHTML
                  loadFeed(1, function() {
                      //fetch newer feed
                      //store content in newFeed
                      newFeed = $(".feed").html(); //select the newFeed's innerHTML
                      done();
                  });
            });

        });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         /**
         * This spec will not start until the done function is called
         * in the call to beforeEach above.And this spec will not complete
         * until its done is called.
         * ref-https://jasmine.github.io/2.4/introduction.html#section-Asynchronous_Support
         * ref-https://scriptverse.academy/tutorials/jasmine-toequal-vs-tobe.html
         */
        it('shows changed content', function(done) {
            //on loading new feed, to check if content is changed
            //compare both feeds innerHTML
            expect(oldFeed === newFeed).toBe(false); // false === false
            done();

        });

     });

}());
