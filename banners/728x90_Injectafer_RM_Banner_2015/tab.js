$(document).ready(function() {
      $("#radio1").prop("checked", true); 

   // $('input').change(function(){
   //    var btnId;
   //    $('input[name="radioTabs"]').is(':checked');
   //    btnId = $(this).attr('id');
   //    console.log('button clicked '+btnId)

   //    if (btnId == 'radio1') {
   //       //ainmates white box of content
   //       $('#div-btn-content').animate({width:'0',height:'0'});
   //       $('#div-btn-content').animate({width:'332',height:'150'});
   //       //fades text in
   //       $('#div-btn1-content-text').delay(500).animate({opacity: 1},'fast','swing');
   //       $('#div-btn2-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn3-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn4-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn5-content-text').animate({opacity: 0},'fast','swing');
   //    };

   //    if (btnId == 'radio2') {
   //       //ainmates white box of content
   //       $('#div-btn-content').animate({width:'0',height:'0'});
   //       $('#div-btn-content').animate({width:'332',height:'100'});
   //       //fades text in
   //       $('#div-btn1-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn2-content-text').delay(500).animate({opacity: 1},'fast','swing');
   //       $('#div-btn3-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn4-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn5-content-text').animate({opacity: 0},'fast','swing');
   //    }

   //    if (btnId == 'radio3') {
   //       //ainmates white box of content
   //       $('#div-btn-content').animate({width:'0',height:'0'});
   //       $('#div-btn-content').animate({width:'332',height:'160'});
   //       //fades text in
   //       $('#div-btn1-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn2-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn3-content-text').delay(500).animate({opacity: 1},'fast','swing');
   //       $('#div-btn4-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn5-content-text').animate({opacity: 0},'fast','swing');
   //    }

   //    if (btnId == 'radio4') {
   //       //ainmates white box of content
   //       $('#div-btn-content').animate({width:'0',height:'0'});
   //       $('#div-btn-content').animate({width:'332',height:'110'});
   //       //fades text in
   //       $('#div-btn1-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn2-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn3-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn4-content-text').delay(500).animate({opacity: 1},'fast','swing');
   //       $('#div-btn5-content-text').animate({opacity: 0},'fast','swing');
   //    }

   //    if (btnId == 'radio5') {
   //       //ainmates white box of content
   //       $('#div-btn-content').animate({width:'0',height:'0'});
   //       $('#div-btn-content').animate({width:'332',height:'160'});
   //       //fades text in
   //       $('#div-btn1-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn2-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn3-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn4-content-text').animate({opacity: 0},'fast','swing');
   //       $('#div-btn5-content-text').delay(500).animate({opacity: 1},'fast','swing');
   //    }
   // });
   scrollDiv_init();

   $("#ISI").mouseleave(function() {
     console.log('ISI mouse leave');
     resumeDiv();
   });
   $("#ISI").mouseenter(function() {
     console.log('ISI mouse enter');
     pauseDiv();
   });           
})

var userScroll = false;     
function mouseEvent(e) { 
   userScroll = true; 
}
window.onwheel = document.onwheel = function(e) {
   clearInterval(ScrollInterval);
};

var firstExpanded = false;

function scrollDiv_init() {
   DivElmnt = document.getElementById('ISI');
   ReachedMaxScroll = false;

   DivElmnt.scrollTop = 0;
   PreviousScrollTop = 0;

   ScrollInterval = setInterval('scrollDiv()', '50');
}

function scrollDiv() {
   if (!ReachedMaxScroll) {

   DivElmnt.scrollTop = PreviousScrollTop;
   PreviousScrollTop++;

   ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
   } else {
   ReachedMaxScroll = (DivElmnt.scrollTop == 0) ? false : true;
   DivElmnt.scrollTop = PreviousScrollTop;
   PreviousScrollTop = 0;
   }
}

function mouseDown() {
  console.log('mouseDown');
  clearInterval(ScrollInterval);
  firstExpanded=false
}

function pauseDiv() {
   if (firstExpanded==true) {
      console.log('dont pause');
   }else{
      console.log('please pause');
      clearInterval(ScrollInterval);
   }
}

function resumeDiv() {
   if (firstExpanded==true) {
      console.log('resumeDiv if');
      firstExpanded=false
   }else{
      console.log('resumeDiv else');
      PreviousScrollTop = DivElmnt.scrollTop;
      ScrollInterval = setInterval('scrollDiv()', '50');   
   }
}

function expandedView() {
   firstExpanded = true;
   console.log('firstExpanded ' + firstExpanded);
}
