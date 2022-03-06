// import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

// let state = {
//   posts: [
//     { id: 1, message: 'hi how are you', likesCount: 12 },
//     { id: 2, message: 'its my  first post', likesCount: 11 },
//     { id: 3, message: 'its my  first post', likesCount: 11 },
//   ]
// };

// it('length of posts should be incremented', () => {
//   // 1.test data
//   let action = addPostActionCreator('it-v-it');
//   // 2. action
//   let newState = profileReducer(state, action)
//   // 3. expectation
//   expect(newState.posts.length).toBe(4);
// })

// it('after deleting length of posts should be decremented', () => {
//   let action = deletePost(1);
//   let newState = profileReducer(state, action)
//   expect(newState.posts.length).toBe(2);
// })

// it('after deleting length should be decrement if id is incorrect', () => {
//   let action = deletePost(10);
//   let newState = profileReducer(state, action)
//   expect(newState.posts.length).toBe(3);
// })

it('codewars', ()=> {
  let f = function revrot(str, sz) {
    let array = str.split('')
    let slicedArr = [];
    for (let i = 0; i < array.length; i += sz) {
      slicedArr.push(array.slice(i, i + sz))
    }
    let cutArr = slicedArr.map(e => {
      if (e.length == sz) {
        return e.join('')
      } else {
        return '0'
      }
    })

    let result = [];
    for (let i = 0; i < cutArr.length; i++) {
      if (cutArr[i].length == sz) {
        cutArr[i] % 2 == 0
          ? result.push(cutArr[i].split('').reverse().join(''))
          : result.push(cutArr[i].slice(1) + cutArr[i][0])
      }
    }
    return result.join('')
  }

  expect(f("664438750", 4)).toBe('44668753')
})

it ('codewars2', ()=> {
  let f= function revrot(str, sz) 
  {
    let ln = str.length;
     if(sz < 1 || !str || sz > ln) return "";
  
     const test = s => Array.prototype.reduce.call(s, (acc, val) => acc + Number(val) ** 3, 0) % 2 === 0;
     const reverse = s => s.split("").reverse().join("");
     const rotate = s => s.slice(1) + s.slice(0, 1);
  
     let arr = [];
     for(let i = 0; i < ln; i += sz) arr.push(i+sz <= ln ? str.slice(i, i+sz) : "")
     return arr.map(x => test(x) ? reverse(x) : rotate(x)).join("");
  }
  expect(f("664438750", 4)).toBe('44668753')
})

it ('codewars3', ()=> {
  let f=  function revrot(str, sz) {
    let array = str.split('')
    let slicedArr = [];
    for (let i = 0; i < array.length; i += sz) {
      slicedArr.push(array.slice(i, i + sz))
    }     
    let result = [];
    for (let i = 0; i < Math.floor(str.length / sz); i++) {
      let a = slicedArr[i].join('')
      a % 2 == 0
        ? result.push(slicedArr[i].reverse().join(','))
        : result.push(slicedArr[i].slice(1) + ','+ slicedArr[i][0])
    }
    return result.join(',').split(',').join('')
  }
  expect(f("733049910872815764", 5)).toBe('330479108928157')
})