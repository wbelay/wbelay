// JavaScript source code
var listName;

function main() {


      $.ajax({

             url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getByTitle('testABC')/items?$select=Name",
             contentType: "application/json;odata=verbose",
             headers: { "Accept": "application/json; odata=verbose" },
             success: OnDataReturned,
             error: onError

      
          });

    function onError(err) {

        console.log('%cRequest  accessing list.', 'color: red');

    }

    function OnDataReturned(data) {   
    
                     var odataResults = data.d.results;
                     var dataArray = [];
                     

                      if(odataResults.length > 0)
                      {
                      
                         for(var i=0; i < odataResults.length; i++)
                         {
                         
                           var _obj = {
                                         Description: odataResults[i].Name["Description"],
                                         Url:  odataResults[i].Name["Url"]
                           
                               };
                         
                            dataArray.push(_obj);
                         }
                         
                      
                      }
                      
                      
                      
           var data = { 
   
                           DataDetail: dataArray
                 
                       };
                       
                       
          $('#detailSection').html($('#displayData').render(data));  



                   }
                   


}


