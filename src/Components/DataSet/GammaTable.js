import { useEffect, useState } from 'react';
import './DataSet.css';

const GammaTable = ({ analyticsGammaClassOneData,
    analyticsGammaClassTwoData,
    analyticsGammaClassThreeData }) => {

    const [gammaStatisticsArray, setGammaStatisticsArray] = useState([])

    function getCalculatedMean(arr) {
        // Creating variable to store the sum
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

        }

    }

    function getCalculatedMode(arr) {
        arr = arr.sort((x, y) => x - y);
        var bestStreak = 1;
        var bestElem = 0;
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
        let GammaArrayClassOne = analyticsGammaClassOneData.map((item) => Number(item.Gamma));
        let GammaArrayClassTwo = analyticsGammaClassTwoData.map((item) => Number(item.Gamma));
        let GammaArrayClassThree = analyticsGammaClassThreeData.map((item) => Number(item.Gamma));

        let GammaMeanClassOne = getCalculatedMean(GammaArrayClassOne);
        let GammaMedianClassOne = getCalculatedMedian(GammaArrayClassOne);
        let GammaModeClassOne = getCalculatedMode(GammaArrayClassOne);

        let GammaMeanClassTwo = getCalculatedMean(GammaArrayClassTwo);
        let GammaMedianClassTwo = getCalculatedMedian(GammaArrayClassTwo);
        let GammaModeClassTwo = getCalculatedMode(GammaArrayClassTwo);

        let GammaMeanClassThree = getCalculatedMean(GammaArrayClassThree);
        let GammaMedianClassThree = getCalculatedMedian(GammaArrayClassThree);
        let GammaModeClassThree = getCalculatedMode(GammaArrayClassThree);
        let classOneArray = [
            { classOneMean: GammaMeanClassOne, classOneMedian: GammaMedianClassOne, classOneMode: GammaModeClassOne },
            { classTwoMean: GammaMeanClassTwo, classTwoMedian: GammaMedianClassTwo, classTwoMode: GammaModeClassTwo },
            { classThreeMean: GammaMeanClassThree, classThreeMedian: GammaMedianClassThree, classThreeMode: GammaModeClassThree }
        ];
        setGammaStatisticsArray([...classOneArray]);


    }, [analyticsGammaClassOneData, analyticsGammaClassTwoData, analyticsGammaClassThreeData]);



    return (
        <div>
            <table>
                <caption className='caption-table'>Gamma Table</caption>
                <tbody>
                    <tr>
                        <td>Measures</td>
                        <th scope="col">Class 1</th>
                        <th scope="col">Class 2</th>
                        <th scope="col">Class 3</th>


                    </tr>

                    <tr>
                        <th scope="row">Falvanoids Mean</th>
                        <td>{gammaStatisticsArray[0]?.classOneMean}</td>
                        <td>{gammaStatisticsArray[1]?.classTwoMean}</td>
                        <td>{gammaStatisticsArray[2]?.classThreeMean}</td>

                    </tr>
                    <tr>
                        <th scope="row">Falvanoids Median</th>
                        <td>{gammaStatisticsArray[0]?.classOneMedian}</td>
                        <td>{gammaStatisticsArray[1]?.classTwoMedian}</td>
                        <td>{gammaStatisticsArray[2]?.classThreeMedian}</td>
                    </tr>
                    <tr>
                        <th scope="row">Falvanoids Mode</th>
                        <td>{gammaStatisticsArray[0]?.classOneMode}</td>
                        <td>{gammaStatisticsArray[1]?.classTwoMode}</td>
                        <td>{gammaStatisticsArray[2]?.classThreeMode}</td>
                    </tr>
                </tbody>

            </table>

        </div>
    )

}

export default GammaTable;