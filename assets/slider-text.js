var rightJS = {
    init: function(){
      rightJS.Tags = document.querySelectorAll('.rightJS');
      for(var i = 0; i < rightJS.Tags.length; i++){
        rightJS.Tags[i].style.overflow = 'hidden';
      }
      rightJS.Tags = document.querySelectorAll('.rightJS div');
      for(var i = 0; i < rightJS.Tags.length; i++){
        rightJS.Tags[i].style.position = 'relative';
        rightJS.Tags[i].style.right = '-'+rightJS.Tags[i].parentElement.offsetWidth+'px';
      }
      rightJS.loop();
    },
    loop: function(){
      for(var i = 0; i < rightJS.Tags.length; i++){
        var x = parseFloat(rightJS.Tags[i].style.right);
        x ++;
        var W = rightJS.Tags[i].parentElement.offsetWidth;
        var w = rightJS.Tags[i].offsetWidth;
        
        if(x > W) x = -W;
        if (rightJS.Tags[i].parentElement.parentElement.querySelector(':hover') !== rightJS.Tags[i].parentElement) rightJS.Tags[i].style.right = x + 'px';
      } 
      requestAnimationFrame(this.loop.bind(this));
    }
  };
//  rightJS.init();

  var leftJS = {
    init: function(){
        leftJS.Tags = document.querySelectorAll('.leftJS');
        for(var i = 0; i < leftJS.Tags.length; i++){
            leftJS.Tags[i].style.overflow = 'hidden';
        }
        leftJS.Tags = document.querySelectorAll('.leftJS div');
        for(var i = 0; i < leftJS.Tags.length; i++){
            leftJS.Tags[i].style.position = 'relative';
            leftJS.Tags[i].style.left = leftJS.Tags[i].parentElement.offsetWidth+'px';
        }
        leftJS.loop();
    },
    loop: function(){
      for(var i = 0; i < leftJS.Tags.length; i++){
        var x = parseFloat(leftJS.Tags[i].style.left);
        x ++;
        var W = leftJS.Tags[i].parentElement.offsetWidth;
        var w = leftJS.Tags[i].offsetWidth;
        if(x > W) x = -W;
        if (leftJS.Tags[i].parentElement.parentElement.querySelector(':hover') !== leftJS.Tags[i].parentElement) leftJS.Tags[i].style.left = x + 'px';
      } 
      requestAnimationFrame(this.loop.bind(this));
    }
  };
  // leftJS.init();