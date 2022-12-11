db.articles.update({_id: 'some_random_id_1'}, {$set: {title: "intro to node"}})

db.articles.update({title: 'interval'}, {$set: {"author.name": "updated author"}})

db.articles.update({}, {$rename: {details: "description"}}, {multi: ture})

db.articles.update({_id: 'some_random_id_1'}, {$push: {tags: "HTML"}})

db.articles.update({title: 'climax'}, {$inc: {"author.age": 5}})

db.users.update({name: "Steve Ortega"}, {$push: {sports: "golf"}})

db.users.find({sports: {$inc: ["cricket", "football"]}})

db.users.find({name: /ri/i})