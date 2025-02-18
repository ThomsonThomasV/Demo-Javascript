function minMax(nums) {
    const result = {min: null,max: null};

    for (let i = 0; i < nums.length; i++) {
      const value = nums[i];

      if (result.min === null || value < result.min) {
        result.min = value;
      }

      if (result.max === null ||value > result.max) {
        result.max = value;
      }

    }


    return result;
  }

  console.log(minMax([]));
  console.log(minMax([-2]));


  function countWords(words){
    let result = {};

    for(let i = 0; i < words.length; i++ ){

        let word = words[i];

        if(!result[word]){
            result[word]=1;
        } else{
            result[word]++;
        }

          
    }

  return result;
  }

  console.log(countWords(['apple', 'grape', 'apple', 'apple']));