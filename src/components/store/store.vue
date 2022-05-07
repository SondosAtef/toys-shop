<template>
	<div>
		<div class="container my-5">
			<div class="row mx-5">
				<aside class="col-2 bg-light">
					<!-- filter by -->
					<div class="text-center mx-4 my-4">
						<div
							class="border-bottom border-5 border-dark text-uppercase rounded"
						>
							<strong>Filter by</strong>
						</div>
					</div>
					<!-- filter by -->
					<!-- category -->

<!-- <p>
    <select v-model="multiSelect" multiple>
      <option>one</option>
      <option>two</option>
      <option>three</option>
    </select>
    {{multiSelect}}
  </p> -->

					<div class="mx-2">
						<h5>Category</h5>
						<div class="form-check">
							<input
								class="form-check-input"
								type="checkbox"
								value="doll"
								id="category"
								v-model="category"
							/>
							<label class="form-check-label" for="flexCheckDefault">
								Doll
							</label>
						</div>
						<div class="form-check">
							<input
								class="form-check-input"
								type="checkbox"
								value="controlcar"
								id="category"
								v-model="category"
							/>
							<label class="form-check-label" for="flexCheckChecked">
								Car
							</label>
						</div>

						<div class="form-check">
							<input
								class="form-check-input"
								type="checkbox"
								value="game"
								id="category"
								v-model="category"
							/>
							<label class="form-check-label" for="flexCheckChecked">
								Game
							</label>
						</div>
					</div>

					
					<!-- category -->

					<!-- size -->
					<div class="mx-2 my-3">
						<h5>Size</h5>
						<div class="form-check">
							<input
								class="form-check-input"
								type="checkbox"
								value="S"
								id="size"
								v-model="size"
							/>
							<label class="form-check-label" for="flexCheckDefault"> S </label>
						</div>
						<div class="form-check">
							<input
								class="form-check-input"
								type="checkbox"
								value="M"
								id="size"
								v-model="size"
							/>
							<label class="form-check-label" for="flexCheckChecked"> M </label>
						</div>

						<div class="form-check">
							<input
								class="form-check-input"
								type="checkbox"
								value="L"
								id="size"
								v-model="size"
							/>
							<label class="form-check-label" for="flexCheckChecked">
								LG
							</label>
						</div>

						<div class="form-check">
							<input
								class="form-check-input"
								type="checkbox"
								value="XL"
								id="size"
								v-model="size"
							/>
							<label class="form-check-label" for="flexCheckChecked">
								XL
							</label>
						</div>
					</div>
					<!-- size -->
					<!-- Color -->
					<div class="mx-2 my-3">
						<h5>Color</h5>
						<div class="form-check">
							<input
								class="form-check-input"
								type="radio"
								name="color"
								id="red"
								value="red"
								v-model="color"
							/>
							<label class="form-check-label" for="flexRadioDefault1">
								Red
							</label>
						</div>
						<div class="form-check">
							<input
								class="form-check-input"
								type="radio"
								name="color"
								id="green"
								value="green"
								v-model="color"
							/>
							<label class="form-check-label" for="flexRadioDefault2">
								Green
							</label>
						</div>
                        <div class="form-check">
							<input
								class="form-check-input"
								type="radio"
								name="color"
								id="blue"
								value="blue"
								v-model="color"
							/>
							<label class="form-check-label" for="flexRadioDefault2">
								Blue
							</label>
						</div>
					</div>
					<!-- color -->
                    <!-- Price -->
                    <div class="mx-2 my-3">
						<h5>Price</h5>
                        <input type="range" class="form-range" min="10" max="500" step="10" id="price" v-model="price">
                    </div>
				</aside>

				<div class="col-10 px-5">
                    <!-- header -->
                <header class=""></header>
                    <!-- header -->
    <!-- cards -->
<div class="row cards">
      <div
        v-for="toy in toys"
        :key="toy.id"
        class="col-12 col-md-6 col-lg-4 text-center myCard"
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


<!-- cards -->
                </div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import StarRating from "vue-star-rating";

export default {
	name: "storeComp",
	components : {
    StarRating
	},
	data(){
		return{
				category : [] ,
				size : [],
				color:"",
				price : "",
				toys : []
			} 	
	} ,
	mounted(){
		this.category = ["doll" , "controlcar" , "game"],
		this.size = ["S" , "M" , "L" , "XL" ],
		this.color = "red",
		this.price ="500"
	},
	updated(){
		axios.get("http://localhost:2000/toys").then((response)=>{
			this.toys = response.data.filter((toy)=> {
				return this.category.indexOf(toy.category) > -1 && this.size.indexOf(toy.size) > -1 && toy.color.toUpperCase() === this.color.toUpperCase() && toy.price <= this.price
			}
			)
			console.log(this.toys);
		})
	}

};
</script>

<style lang="css" scoped>
aside {
	border-radius: 10px;
	border: 2px solid rgb(194, 186, 186);
	box-shadow: 3px 2px #c7c1c1;
}
header{
    width: 54rem;
    height: 29%;
    border-radius: 30px;
    background: url("../../assets/collection.jpg") no-repeat center;
    margin-left: 40px;
}
.cards{
	border: solid 2px red;
}
</style>
