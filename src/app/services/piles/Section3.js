"use client";
import Image from "next/image";
import foodEat from "../../assets/food-eat.png";
import foodAvoid from "../../assets/food-avoid.png";
import styles from './Section3.module.css';

export default function Section3() {
  return (
    <div className=" my-5 p-4">
      <div className="row g-4 ">
        {/* Food to Eat */}
        <div className={`col-12 col-lg-6 d-flex justify-content-between ${styles.foodEatIcondiv}`}>
            <Image src= {foodEat} alt="food-eat" />
          <div className={`p-5 rounded-4 d-flex flex-column  h-100 flex-grow-1 ${styles.foodEat}`}>
            <h4 className="text-success fw-bold mb-3"> Food to eat in piles</h4>
            <ul className="">
              <li>Legumes: beans</li>
              <li>Nuts, peas and lentils</li>
              <li>Whole grains: barley, brown rice, buckwheat, millets and oatmeal</li>
              <li>Cruciferous vegetables: broccoli, cauliflower, Brussels sprouts, radish, cabbage</li>
              <li>Root vegetables: sweet potatoes, beetroot, carrots and potato</li>
              <li>Fibre foods: apples, raspberries, pears, cucumbers and watermelons</li>
            </ul>
          </div>
        </div>

        {/* Food to Avoid */}
        <div className={`col-12 col-lg-6 d-flex  ${styles.foodAvoidIcondiv}`}>
            <Image src={foodAvoid} alt="food-avoid" />
          <div className={`p-5 rounded-4 d-flex flex-column h-100 flex-grow-1 ${styles.foodAvoid}`}>
            <h4 className="text-danger fw-bold mb-3">Food to avoid in piles</h4>
            <ul className="">
              <li>Fried foods</li>
              <li>Fatty foods</li>
              <li>White bread</li>
              <li>Processed foods</li>
              <li>Frozen meals</li>
              <li>Heavy meals and meat</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
