import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters:FilterProps){
    const {manufacturer,year,fuel,limit,model}=filters
    const headers={
        'X-RapidAPI-Key': '2f1cc86a73msh8e8fd0b076cc497p1918dcjsn4eecb397cea1',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(`
    https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&fuel_type=${fuel}&limit=${limit}&model=${model}`
    ,{
        headers:headers,
    });

    const result= await response.json();
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };


export const generateCarImageUrl=(car:CarProps,angel?:string)=>{
    const url=new URL('https://cdn.imagin.studio/getimage')
    const {make,year,model}=car
    url.searchParams.append('cutomer','KEY')
    url.searchParams.append('make',make)
    
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    return newPathname;
  };