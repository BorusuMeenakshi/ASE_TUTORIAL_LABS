/**
 * Created by vbmxb on 10/26/2016.
 */

function kget()
{
    //location.reload();
    var service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
    var params = {
        'query': document.getElementById("kgt").value,
        'limit': 10,
        'indent': true,
        'key' : 'AIzaSyDsXkEfKo5KxCruUXsfV0XACCRAOMKJ8kI',
    };
    $.getJSON(service_url + '?callback=?', params, function(response) {
        $.each(response.itemListElement, function(i, element) {
            $('<div>', {text:element['result']['name']}).appendTo(document.body);

            //   document.getElementById("x1").innerHTML=element['result']['name'];

            // clsfy(text1);
        });
    });
}
function rel()
{
    location.reload();
}
function clsfy(t)
{
    var t,p,k1,k2;
    var text1=document.body.innerHTML;
    //document.getElementById("x1").value;

    var serviurl = 'https://api.dandelion.eu/datatxt/cl/v1/?text='+encodeURIComponent(text1)+'&model=648b9f89-b869-4639-9386-5493bfb7a84d&$app_id=f270d90f33544dfd9f4a1b9221389a25&$app_key=f270d90f33544dfd9f4a1b9221389a25';
    //document.write(serviurl);
//      document.write(serviurl);


    $.getJSON(serviurl, function(data) {
        //data is the JSON string
        for(var i=0; i < data.categories.length; i++)
        {
            if(data.categories[i].score>data.categories[i+1].score)
            {
                k1=data.categories[i].score;
                t=i;
            }
            else
            {
                k2=data.categories[i+1].score;
                p=i+1;
            }


        }
        if(k1>k2)
        {
            document.write(data.categories[t].name);
        }
        else
        {
            document.write(data.categories[p].name);
        }
        for(var i=0; i < data.categories.length; i++)
        {
            document.write(data.categories[i].name+" - "+data.categories[i].score+"<br/>");
            // document.write("\n");

            /* while(i<data.categories.length)
             {
             if(data.categories[i].score>data.categories[i+1].score)
             {
             t=data.categories[i].score;
             p=i;
             }
             else
             {
             t=data.categories[i+1].score ;
             p=i+1;
             }}
             document.write(data.categories[p].name);*/
        }
    });
}
