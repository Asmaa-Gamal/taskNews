
var links= document.getElementsByClassName("nav-link");
var news;
var category ='general';
var country='eg';
getNews();

for(var i=0; i< links.length; i++)
 {
	links[i].addEventListener("click",function(e){
			
	 category = e.target.innerHTML;
	getNews(category);
			
		})
}



getNews();

function getNews(cat)
{


var req=new XMLHttpRequest();
var url=`http://newsapi.org/v2/top-headlines?country=`+country+`&category=`+category+`&apiKey=0ddc32d2db8640dd9f909019c5bcbacd
`;

req.open("GET",url)

req.status;

req.onreadystatechange=function()
{
	if(req.readyState==4 && req.status == 200)
		{
			news=JSON.parse(req.response);
			news=news.articles;
			displayNews();
			
		}
	
	
}
req.send();
}
	
function displayNews()
{

var temp="";

for(var i=0; i<news.length;i++)
	{
		temp+=`<div class="col-md-3 mt-4">
				<div class="new">
<img src="`+news[i].urlToImage+`"class="img-fluid">
							<h5>`+news[i].title+`</h5>
							<p class="text-muted">`+news[i].description+`desc</p>
						</div>
					</div>`
	}
		

document.getElementById("newsRow").innerHTML=temp;
	
	}


