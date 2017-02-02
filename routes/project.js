/*

GET project page

*/


exports.viewProject = function(req, res){

	var name = req.params.name;
	console.log("The project name is: " + name);


	// congtroller code
	res.render('project',{
		'projectName': name
	});


};