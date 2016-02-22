$(document).ready(function(){
	$(".calculateButton").click(function(){
	    
	    var deltaMoney = $("#finalAmount").val() - $("#initialAmount").val();
	    var weeks = deltaMoney / $("#moneyPerWeek").val();
	    //var today = moment().today();
	    
	    $(".price").empty();
	    
	    $(".price").append("You will earn $" + $("#finalAmount").val() + " on:<br/>");
        $(".price").append(moment().add(weeks, 'weeks').format('LL'));
        //$(".price").append(today);
	})
});