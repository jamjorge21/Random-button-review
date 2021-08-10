const dateSites = document.querySelector('.dateviews');
const dates = document.querySelector('.dates')
const btnG = document.querySelector('.generator')


document.getElementById('hi').style.display = 'none';

document.querySelector('.dates').style.display = 'none';

btnG.addEventListener('click', function(){

    document.getElementById('hi').style.display = '';

    document.querySelector('.dates').style.display = '';
    
    //Generate a random date pic
    const random = Math.trunc(Math.random()*10)+1;



    dateSites.src = `date-${random}.png`;
    console.log('is working')

    
    
    console.log(random)

    //Displays the date through image

    dates.classList.remove('hidden');
    dateSites.classList.remove('hidden');

    if (random == 1){
        document.querySelector('.dates').textContent = 'Go to an amusement park.'
    }else if (random == 2){
        document.querySelector('.dates').textContent = 'Go to a concert. '
    }else if (random == 3){
        document.querySelector('.dates').textContent = 'Go out to dinner. '
    }else if (random == 4){
        document.querySelector('.dates').textContent = 'Go to a dance club. '
    }else if (random == 5){
        document.querySelector('.dates').textContent = 'Go bowling. '
    }else if (random == 6){
        document.querySelector('.dates').textContent = 'Go to a arcade. '
    }else if (random == 7){
        document.querySelector('.dates').textContent = 'Go to the movies.'
    }else if (random == 8){
        document.querySelector('.dates').textContent = 'Have a picnic. '
    }else if (random == 9){
        document.querySelector('.dates').textContent = 'Go shopping. '
    }else if (random == 10){
        document.querySelector('.dates').textContent = 'Stay in. '
    }else{

    }


    


}) 



