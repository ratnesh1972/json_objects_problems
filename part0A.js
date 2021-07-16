var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
        {
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        },
        {
            name: 'foo',
            activities: ['sleep', 'pre-sleep naps'],
            weight: 3
        }
    ]
}

//Add height and weight to Fluffy
cat.weight = 10;

//Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = 'Fluffyy';

//List all the activities of Fluffyy’s catFriends.
cat.catFriends.forEach(catEle => { console.log(catEle.activities) });

//Print the catFriends names.
cat.catFriends.forEach(catEle => { console.log(catEle.name) });

//Print the total weight of catFriends
let totalWeight = 0;
cat.catFriends.forEach(catEle => { totalWeight += catEle.weight });
console.log(totalWeight);

//Print the total activities of all cats (op:6)
let totalActivities = cat.activities;
cat.catFriends.forEach(catEle => { totalActivities = totalActivities.concat(catEle.activities) });
console.log(totalActivities);

//Add 2 more activities to bar & foo cats
cat.catFriends[0].activities.push('Playing');
cat.catFriends[0].activities.push('Sleeping');
cat.catFriends[1].activities.push('Be Grumpy');
cat.catFriends[1].activities.push('Eat omlete');

//Update the fur color of bar
cat.catFriends[0].furcolor = 'Black';

console.log(cat);