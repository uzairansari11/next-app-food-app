import React, { Suspense } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/component/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Loading from "./loading-food";

const MealsData = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const pages = async () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipes and cook it yourself. It is easy to
          customize.
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>

      <main className={styles.main}>
        <Suspense fallback={<Loading />}>
          <MealsData />
        </Suspense>
      </main>
    </>
  );
};

export default pages;
