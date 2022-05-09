<template>
	<div>
		<div class="container col-xl-10 p-5">
			<div class="row align-items-center g-lg-5">
				<div class="col-lg-4">
					<img
						:src="toy.image"
						:alt="toy.name"
						class="d-block mx-lg-auto img-fluid rounded"
					/>
				</div>
				<div class="col-md-10 col-lg-8">
					<h5>{{ toy.name }}</h5>
					<hr />
					<p class="text-secondary">{{ toy.description }}</p>
					<div class="row">
						<div class="col-6">
							<h6 class="fw-bold mb-4">{{ toy.price }} $</h6>
							<div class="row">
								<div class="col-2">
									<div class="quantity">{{ toy.quantity }}</div>
                                    <div class="icons">
                                        <i class="bi bi-file-plus"></i>
                                        <i class="bi bi-dash-square"></i>
                                    </div>
								</div>
                                <div class="col-10">
                                        <cartbutton/>
                                </div>

							</div>
                            <h6 class="fw-bold mt-4">Share</h6>
                            <div class="social-icons">
                                    <i class="bi bi-facebook me-2"></i>
                                    <i class="bi bi-twitter me-2"></i>
                                    <i class="bi bi-whatsapp me-2"></i>
                            </div>
						</div>
						<div class="col-6">
                            <policiesComp />
                        </div>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import cartbutton from "../cartbutton.vue"
import policiesComp from "./policies.vue"

export default {
	name: "toyDetailsComp",
	data() {
		return {
			id: "",
			toy: {},
		};
	},
    components:{
 cartbutton,
 policiesComp
    },
	created() {
		this.id = this.$route.params.id;
		axios
			.get(`http://localhost:2000/toys?id=${this.id}`)
			.then((res) => {
				this.toy = res.data[0];
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
</script>

<style scoped>
.quantity {
	border: 2px solid black;
    padding :10px;
	font-size: large;
	display: inline;
}
i {
	cursor: pointer;
	font-size: 20px;
}
.icons{
    margin-top: 10px;
}
</style>
