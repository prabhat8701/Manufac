import { useEffect, useState } from 'react';
import './DataSet.css';

const FlavanoidsTable = ({ analyticsAlcholicClassOneData, analyticsAlcholicClassTwoData, analyticsAlcholicClassThreeData }) => {
    const [falvanoidsStatisticsArray, setFalvanoidsStatisticsArray] = useState([])

    function getCalculatedMean(arr) {
  
        let sum = 0;
        let mean = 0;

        // Running the for loop
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        mean = sum / arr.length;
        return parseFloat(mean?.toFixed(3));

    }

    function getCalculatedMedian(arr) {

        let sortedArray = arr.sort((a, b) => a - b);
        let len = sortedArray.length;
        //check if the length of array is even
        if (len % 2 === 0) {

            const median = (arr[len / 2] + arr[len / 2 + 1]) / 2;
            return parseFloat(median?.toFixed(3));
    
        }

        // if the length of the array is odd
        else {
            const median = arr[(len + 1) / 2];
            return parseFloat(median?.toFixed(3));
            // console.log("The number is odd." , median);
        }
     
    }

    function getCalculatedMode(arr) {
        arr = arr.sort((x, y) => x - y);

        var bestStreak = 1;
        var bestElem = arr[0];
        var currentStreak = 1;
        var currentElem = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] !== arr[i]) {
                if (currentStreak > bestStreak) {
                    bestStreak = currentStreak;
                    bestElem = currentElem;
                }

                currentStreak = 0;
                currentElem = arr[i];
            }

            currentStreak++;
        }

        return currentStreak > bestStreak ? parseFloat(currentElem?.toFixed(3)) : parseFloat(bestElem?.toFixed(3));
    }

    useEffect(() => {
        let FlavanoidsArrayClassOne = analyticsAlcholicClassOneData.map((item) => Number(item.Flavanoids));
        let FlavanoidsArrayClassTwo = analyticsAlcholicClassTwoData.map((item) => Number(item.Flavanoids));
        let FlavanoidsArrayClassThree = analyticsAlcholicClassThreeData.map((item) => Number(item.Flavanoids));
        let flavanoidsMeanClassOne = getCalculatedMean(FlavanoidsArrayClassOne);
        let flavanoidsMedianClassOne = getCalculatedMedian(FlavanoidsArrayClassOne);
        let flavanoidsModeClassOne = getCalculatedMode(FlavanoidsArrayClassOne);
        let flavanoidsMeanClassTwo = getCalculatedMean(FlavanoidsArrayClassTwo);
        let flavanoidsMedianClassTwo = getCalculatedMedian(FlavanoidsArrayClassTwo);
        let flavanoidsModeClassTwo = getCalculatedMode(FlavanoidsArrayClassTwo);
        let flavanoidsMeanClassThree = getCalculatedMean(FlavanoidsArrayClassThree);
        let flavanoidsMedianClassThree = getCalculatedMedian(FlavanoidsArrayClassThree);
        let flavanoidsModeClassThree = getCalculatedMode(FlavanoidsArrayClassThree);
        let classOneArray = [
            { classOneMean: flavanoidsMeanClassOne, classOneMedian: flavanoidsMedianClassOne, classOneMode: flavanoidsModeClassOne },
            { classTwoMean: flavanoidsMeanClassTwo, classTwoMedian: flavanoidsMedianClassTwo, classTwoMode: flavanoidsModeClassTwo },
            { classThreeMean: flavanoidsMeanClassThree, classThreeMedian: flavanoidsMedianClassThree, classThreeMode: flavanoidsModeClassThree }
        ];
        setFalvanoidsStatisticsArray([...classOneArray]);


    }, [analyticsAlcholicClassOneData, analyticsAlcholicClassTwoData, analyticsAlcholicClassThreeData]);

    //console.log("hii90", falvanoidsStatisticsArray)

    return (
        <div>
            <table>
           
                <caption className='caption-table'>Flavanoids Table</caption>
                <tbody>
                <tr>
                    <td>Measures</td>
                    <th scope="col">Class 1</th>
                    <th scope="col">Class 2</th>
                    <th scope="col">Class 3</th>


                </tr>

                <tr>
                    <th scope="row">Flavanoids Mean</th>
                    <td>{falvanoidsStatisticsArray[0]?.classOneMean}</td>
                    <td>{falvanoidsStatisticsArray[1]?.classTwoMean}</td>
                    <td>{falvanoidsStatisticsArray[2]?.classThreeMean}</td>

                </tr>
                <tr>
                    <th scope="row">Flavanoids Median</th>
                    <td>{falvanoidsStatisticsArray[0]?.classOneMedian}</td>
                    <td>{falvanoidsStatisticsArray[1]?.classTwoMedian}</td>
                    <td>{falvanoidsStatisticsArray[2]?.classThreeMedian}</td>
                </tr>
                <tr>
                    <th scope="row">Flavanoids Mode</th>
                    <td>{falvanoidsStatisticsArray[0]?.classOneMode}</td>
                    <td>{falvanoidsStatisticsArray[1]?.classTwoMode}</td>
                    <td>{falvanoidsStatisticsArray[2]?.classThreeMode}</td>
                </tr>

                </tbody>
            </table>

        </div>
    )

}

export default FlavanoidsTable;