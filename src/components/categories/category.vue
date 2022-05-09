<template>
  <div class="container">
    <div class="d-flex justify-content-evenly my-5">
      <h1 class="d-flex align-items-center fw-bold" style="font-size: 8vw">
        {{ pageName.toUpperCase() }}
      </h1>
      <img :src="image" alt="..." />
    </div>
    <div class="row">
      <div
        v-for="toy in toys"
        :key="toy.id"
        class="col-12 col-md-6 col-lg-4 text-center my-4"
      >
        <img class="img-fluid rounded mw-80 h-50" :src="toy.image" />
        <h4 class="mt-3">{{ toy.name }}</h4>
        <star-rating
          :star-size="25"
          :rating="toy.rate"
          class="justify-content-center my-3"
        />
        <button class="btn btn-sm btn-primary rounded-pill px-4">
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StarRating from "vue-star-rating";

export default {
  name: "ControlCar",
  data() {
    return {
      pageName: "",
      image: "",
      toys: [],
    };
  },
  mounted() {
    this.pageName = window.location.pathname.slice(1);
    const headerOfCategory = {
      controlcar: "http://localhost:8080/img/category-6.24d7cbc5.png",
      doll: "http://localhost:8080/img/category-7.dccbb5ce.png",
      game: "http://localhost:8080/img/category-4.ab905da1.png",
      animals: "http://localhost:8080/img/category-5.8c7127b5.png",
      popular: "http://localhost:8080/img/category-2.e94d89f9.png",
    };
    this.image = headerOfCategory[this.pageName];
    console.log(this.header);
    axios.get("http://localhost:2000/toys").then((response) => {
      this.toys = response.data.filter((toy) => toy.category === this.pageName);
      console.log(this.toys);
    });
  },
  components: {
    StarRating,
  },
};
</script>
