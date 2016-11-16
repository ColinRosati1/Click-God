document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {





    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://clickbait.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);



function getHeadline() {
	var hsh = {
		tech: ["Insider video", "logo-provoked", "Girlpower", "Scientists", "12 Years Ashamed", "Babysitter", "instant action", "the mixed media", "Users", "Javascript", "Uber", "You", "Youtube", "Us", "Gulp", "Make", "Linux", "Icons", "God", "Puma", "Your eyes", "Buffer bitch", "Objective", "Subjective", "Reflections", "Click rate", "Twitter", "Facebook", "Instagram", "Messy Bitch", "Advil", "Cold Fusion", "MicroCams", "Cake", "Adobe's own", "23 emojis", "Search", "Adderal", "Corporate iconography", "Bread products", "Carbs", "Video", "God and you", "Breakfast", "Backbone", "Shit", "Truth"],
		statement: ["I'll Never Look At This Legendary", "What This Angry Physicist Did", "I Thought It Was The Worst Kind Of Discrimination", "You Need To See The Mindblowing", "You Absolutely Have To Listen To The Tearjerking Two Words", "If You Can Watch This And Not Feel Disgusted", "Here Is What Happens When A Senator Says", "My Hope For The World Plummeted", "Watch An Angry", "What This Iconoclastic", "shut up about things", "Here Is What Happens When A", "10 epic fails", "7 cynical ways politicians have ", "10 reasons why God", "6 cloud computing conspiracy theories", "always on the moment", "ontop of it", "so cool", "basically", "Can you guess how many of these crazy", "all our objects",  "What Kanye doesn't want you to know", " How to always", "If your life lacks then", "How this puppy joined the Users and taken", "Why aren't you here", "Replacing", "on Youtube ever", "Aggrivating", "Are those frusterations", "Why you shouldn't use", "Stop using", "Don't use", "We stopped using", "Why we stopped using", "Why we don't like", "Why we don't use", "We don't use", "When you shouldn't use", "The problem with", "5 reasons why Link Farms", "It's over for", "It's very much an eruption", "On both sides of Google", "Miley Cyrus' favorite keyboard shortcuts", "Your eyes decieve you", "is it click or love", "It's a refelction of you", "If you share on Facebook your father will", "why this new evidence will shock you", "The rise and fall of ", "10 under-appreciated hot-key that will reduce", "These life hack will", "why I am the most hurt"],
		questionOne: ["Is it time to ditch", "Ever feel alone", "can you pull my strings", "are there any discounts", "are you my uber", "is this happening", "did you find your area", "Should we edit", "is that code for",  "You won't believe your eyes", "after seeing this", "Does God own the cloud", "forget my image", "are you expecting", "Is salvation to share", "was Chrome", "Have you casted",  "Should you stop using", "How to get", "How to exist", "Click or Fav", "Am I the biggest", "Are you the lonelist", "Should you click", "Why leave when you could", "Why subscribe", "Should we stop using", "When will you stop using", "When shouldn't you use", "How do you stop using", "How do you ditch"],
		questionTwo: ["Why"],
		questionThree: ["Is"],
		questionFour: ["Where"],
		terminate: ["Is Genius", "reduces itself", "undoubtably love it", "But Then I Saw This Ridiculous One Minute Video", "Become A Hero With Ten Words", "Delighted The Internet With", "Then You Are Made Of Ice", "This Introverted New Mom Found", "joined the cloud", "What None Of Us Will", "Become An Inspiration With Two refreshes", "After Hearing These Two Questions", "They Call It The World's Greatest Tragedy", "move it", "move your body", "leave in the comments", "that might actually be true", "involving Kickstarter", "exploited my bod", "with this new share", "shared on my blog", "are costing your business money", "clouding alone", "one-click closer", "are taxing your soul", "you might hate it", "facts are just the weirdest myths", "according to your clickrate", "Starts A Revolution", "over time", "are more mysterious than drones", "are more myserious than your search history", "the clickfraud", "bagels", "corporate transition",  "recording video", "witnesses", "the government is trying to keep secret", "in your sleep", "keep our shit together", "on planet Earth","on Youtube ever", "will melt your heart", "outdated", "too slow", "deprecated", "a thing of the past", "obsolete", "ancient", "out of date", "dated", "behind the times"],
		bridge: ["is", "was", "isn't", "are"],
		puncuation: [".", "!"],
		questionMark: ["?"]
	}

	var hsa = {
		tech: ["Insider video", "logo-provoked", "Girlpower", "Scientists", "12 Years Ashamed", "Babysitter", "instant action", "the mixed media", "Users", "Javascript", "Uber", "You", "Youtube", "Us", "Gulp", "Make", "Linux", "Icons", "God", "Puma", "Your eyes", "Buffer bitch", "Objective", "Subjective", "Reflections", "Click rate", "Twitter", "Facebook", "Instagram", "Messy Bitch", "Advil", "Cold Fusion", "MicroCams", "Cake", "Adobe's own", "23 emojis", "Search", "Adderal", "Corporate iconography", "Bread products", "Carbs", "Video", "God and you", "Breakfast", "Backbone", "Shit", "Truth"],
		statement: ["I'll Never Look At This Legendary", "What This Angry Physicist Did", "I Thought It Was The Worst Kind Of Discrimination", "You Need To See The Mindblowing", "You Absolutely Have To Listen To The Tearjerking Two Words", "If You Can Watch This And Not Feel Disgusted", "Here Is What Happens When A Senator Says", "My Hope For The World Plummeted", "Watch An Angry", "What This Iconoclastic", "shut up about things", "Here Is What Happens When A", "10 epic fails", "7 cynical ways politicians have ", "10 reasons why God", "6 cloud computing conspiracy theories", "always on the moment", "ontop of it", "so cool", "basically", "Can you guess how many of these crazy", "all our objects",  "What Kanye doesn't want you to know", " How to always", "If your life lacks then", "How this puppy joined the Users and taken", "Why aren't you here", "Replacing", "on Youtube ever", "Aggrivating", "Are those frusterations", "Why you shouldn't use", "Stop using", "Don't use", "We stopped using", "Why we stopped using", "Why we don't like", "Why we don't use", "We don't use", "When you shouldn't use", "The problem with", "5 reasons why Link Farms", "It's over for", "It's very much an eruption", "On both sides of Google", "Miley Cyrus' favorite keyboard shortcuts", "Your eyes decieve you", "is it click or love", "It's a refelction of you", "If you share on Facebook your father will", "why this new evidence will shock you", "The rise and fall of ", "10 under-appreciated hot-key that will reduce", "These life hack will", "why I am the most hurt"],
		questionOne: ["Is it time to ditch", "Ever feel alone", "can you pull my strings", "are there any discounts", "are you my uber", "is this happening", "did you find your area", "Should we edit", "is that code for",  "You won't believe your eyes", "after seeing this", "Does God own the cloud", "forget my image", "are you expecting", "Is salvation to share on", "was Chrome", "Have you casted",  "Should you stop using", "How to get", "How to exist", "Click or Fav", "Am I the biggest", "Are you the lonelist", "Should you click", "Why leave when you could", "Why subscribe", "Should we stop using", "When will you stop using", "When shouldn't you use", "How do you stop using", "How do you ditch"],
		questionTwo: ["Why"],
		questionThree: ["Is"],
		questionFour: ["Where"],
		terminate: ["Is Genius", "reduces itself", "undoubtably love it", "But Then I Saw This Ridiculous One Minute Video", "Become A Hero With Ten Words", "Delighted The Internet With", "Then You Are Made Of Ice", "This Introverted New Mom Found", "joined the cloud", "What None Of Us Will", "Become An Inspiration With Two refreshes", "After Hearing These Two Questions", "They Call It The World's Greatest Tragedy", "move it", "move your body", "leave in the comments", "that might actually be true", "involving Kickstarter", "exploited my bod", "with this new share", "shared on my blog", "are costing your business money", "clouding alone", "one-click closer", "are taxing your soul", "you might hate it", "facts are just the weirdest myths", "according to your clickrate", "Starts A Revolution", "over time", "are more mysterious than drones", "are more myserious than your search history", "the clickfraud", "bagels", "corporate transition",  "recording video", "witnesses", "the government is trying to keep secret", "in your sleep", "keep our shit together", "on planet Earth","on Youtube ever", "will melt your heart", "outdated", "too slow", "deprecated", "a thing of the past", "obsolete", "ancient", "out of date", "dated", "behind the times"],
		bridge: ["is", "was", "isn't", "are"],
		puncuation: [".", "!"],
		questionMark: ["?"]
	}


		var arr = [
		["statement", "tech", "puncuation"],
		["questionOne", "tech", "questionMark"],
		["statement", "tech", "terminate", "puncuation"],
		["questionTwo", "bridge", "tech", "terminate", "questionMark"],
		["statement", "terminate", "puncuation"],
		["questionTwo", "tech", "questionMark"],
		["statement", "terminate", "puncuation"],
		["statement", "terminate", "puncuation"],
		["statement", "terminate", "puncuation"],

	]

	var ara = [
		["statement", "tech", "puncuation"],
		["questionOne", "tech", "questionMark"],
		["statement", "tech", "terminate", "puncuation"],
		["questionTwo", "bridge", "tech", "terminate", "questionMark"],
		["statement", "terminate", "puncuation"],
		["questionTwo", "tech", "questionMark"],
		["statement", "terminate", "puncuation"],
		["statement", "terminate", "puncuation"],
		["statement", "terminate", "puncuation"],

	]

		var arc = [
		["statement", "tech", "puncuation"],
		["questionOne", "tech", "questionMark"],
		["statement", "tech", "terminate", "puncuation"],
		["questionTwo", "bridge", "tech", "terminate", "questionMark"],
		["statement", "terminate", "puncuation"],
		["questionTwo", "tech", "questionMark"],
		["statement", "terminate", "puncuation"],
		["statement", "terminate", "puncuation"],
		["statement", "terminate", "puncuation"],

	]

	var item = arr[Math.floor(Math.random()*arr.length)];
	var sentenceArr = []
	

	for (x=0; x < item.length; x++) {
		var ele = hsh[item[x]]
		var word = ele[Math.floor(Math.random()*ele.length)];

		if (item[x] === "tech")
			word = "" + word + ""
		sentenceArr.push(word)
	}

	var item = ara[Math.floor(Math.random()*ara.length)];
	var sentenceAra = []

	for (x=0; x < item.length; x++) {
		var ele = hsa[item[x]]
		var word = ele[Math.floor(Math.random()*ele.length)];

		if (item[x] === "tech")
			word = "" + word + ""
		sentenceAra.push(word)
	}

var item = arc[Math.floor(Math.random()*arc.length)];
	var sentenceArc = []

	for (x=0; x < item.length; x++) {
		var ele = hsa[item[x]]
		var word = ele[Math.floor(Math.random()*ele.length)];

		if (item[x] === "tech")
			word = "" + word + ""
		sentenceArc.push(word)
	}



	var end = sentenceArr.pop();
	document.getElementById('headline').innerHTML = sentenceArr.join(" ") + end;
	document.getElementById('headline1').innerHTML = sentenceAra.join(" ");
	document.getElementById('headline2').innerHTML = sentenceArc.join(" ") + end;


}


setInterval(getHeadline,10000);
getHeadline();