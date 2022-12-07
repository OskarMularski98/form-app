<template>
  <div
    class="container-fluid form d-flex align-items-center justify-content-center"
  >
    <div class="row col-xxl-4 col-xl-6 col-md-8 col-sm-10">
      <form
        class="bg-light bg-gradient p-5"
        v-if="!$store.getters['moduleForm/getSubmit']"
        @submit.prevent="submitForm"
      >
        <h3 class="text-center">Form</h3>

        <area-text
          :isValid="error.description.isValid"
          :textLength="descriptionLength"
          v-model="form.description"
          @input="validateDescription"
          @blur="validateDescription"
          text="Description"
        ></area-text>
        <error-view
          :text="error.description.text"
          :isValid="error.description.isValid"
        ></error-view>
        <label
          for="action"
          :class="{ invalid: error.confirmation.isValid === false }"
          class="form-label mb-0"
          >Send confirmation</label
        >
        <radio-button
          id="confirmTrue"
          v-model="form.confirmation"
          name="confirm"
          text="Yes"
          :value="true"
          :isValid="error.confirmation.isValid"
          @change="validateConfirmation"
        ></radio-button>
        <radio-button
          id="confirmFalse"
          name="confirm"
          :isValid="error.confirmation.isValid"
          :value="false"
          v-model="form.confirmation"
          @change="validateConfirmation"
          text="No"
        ></radio-button>
        <error-view
          :isValid="error.confirmation.isValid"
          :text="error.confirmation.text"
        ></error-view>
        <select-custom
          v-model="form.vat"
          id="vat"
          name="vat"
          title="Vat"
          :isValid="error.vat.isValid"
          text="Choose VAT"
          @input="validateVat"
        ></select-custom>
        <error-view
          :isValid="error.vat.isValid"
          :text="error.vat.text"
        ></error-view>
        <text-field
          text="Price netto EUR"
          :isDisabled="form.vat !== null ? false : true"
          v-model="form.priceNetto"
          @input="validateNetto"
          :isValid="error.priceNetto.isValid"
        ></text-field>
        <error-view
          :isValid="error.priceNetto.isValid"
          :text="error.priceNetto.text"
        ></error-view>
        <text-field
          text="Price brutto EUR"
          v-model="priceBrutto"
          :isDisabled="true"
        ></text-field>
        <button-custom
          customClass="btn btn-warning mt-4 rounded-pill"
          text="Submit"
        ></button-custom>
      </form>
      <alert-custom
        v-if="$store.getters['moduleForm/getSubmit']"
        :text="formValid ? alert.text.success : alert.text.error"
        :customClass="formValid ? alert.classes.success : alert.classes.error"
        :title="formValid ? alert.title.success : alert.title.error"
      >
        <button-custom
          @click="submitAgain"
          :text="formValid ? button.text.success : button.text.error"
          :customClass="
            formValid ? button.classes.success : button.classes.error
          "
        ></button-custom>
      </alert-custom>
    </div>
  </div>
</template>

<script>
import AreaText from "@/components/Form/UI/AreaText.vue";
import RadioButton from "@/components/Form/UI/RadioButton.vue";
import TextField from "@/components/Form/UI/TextField.vue";
import ButtonCustom from "@/components/Form/UI/ButtonCustom.vue";
import ErrorView from "@/components/validation/ErrorCustom.vue";
import SelectCustom from "./UI/SelectCustom.vue";
import AlertCustom from "@/components/Form/UI/AlertCustom.vue";
export default {
  components: {
    AreaText,
    RadioButton,
    ButtonCustom,
    TextField,
    ErrorView,
    SelectCustom,
    AlertCustom,
  },
  data() {
    return {
      formValid: true,
      form: {
        description: "",
        confirmation: null,
        vat: null,
        priceNetto: "",
      },
      isSubmited: false,
      validation: {
        description: true,
      },
      error: {
        description: {
          isValid: true,
          text: "",
        },
        confirmation: {
          isValid: true,
          text: "",
        },
        vat: {
          isValid: true,
          text: "",
        },
        priceNetto: {
          isValid: true,
          text: "",
        },
      },
      button: {
        classes: {
          success: "btn btn-success",
          error: "btn btn-danger",
        },
        text: {
          success: "Send again",
          error: "Try again",
        },
      },
      alert: {
        classes: {
          success: "alert-success",
          error: "alert-danger",
        },
        title: {
          success: "Success",
          error: "Error",
        },
        text: {
          success: "Your form was sent. Congratulations!",
          error: "An unknown error occurred. Please try again.",
        },
      },
      maxLength: 255,
    };
  },
  methods: {
    async submitForm() {
      this.validateForm();
      if (
        !this.error.description.isValid ||
        !this.error.confirmation.isValid ||
        !this.error.vat.isValid ||
        !this.error.priceNetto.isValid
      ) {
        return;
      } else {
        const data = {
          description: this.form.description,
          confirmation: this.form.confirmation,
          vat: this.form.vat,
          priceNetto: this.form.priceNetto,
          priceBrutto: this.priceBrutto,
        };
        this.$store.commit("moduleForm/setSubmit", true);
        this.form.description = "";
        this.form.confirmation = null;
        this.form.vat = null;
        this.form.priceNetto = "";
        try {
          await this.$http.post(
            `https://form-app-om-default-rtdb.firebaseio.com/forms.json`,
            data
          );
          this.formValid = true;
        } catch (error) {
          if (error.message) {
            this.alert.text.error = error.message;
          } else {
            this.alert.text.error =
              "An unknown error occurred. Please try again.";
          }
          this.formValid = false;
        }
      }
    },
    validateDescription() {
      if (this.form.description === "") {
        this.error.description.isValid = false;
        this.error.description.text = "Text is required.";
      } else if (this.form.description.length >= this.maxLength) {
        this.error.description.isValid = false;
        this.error.description.text = `You can't enter more than 255 characters.`;
      } else {
        this.error.description.isValid = true;
        this.error.description.text = "";
      }
    },
    validateConfirmation() {
      if (this.form.confirmation === null) {
        this.error.confirmation.isValid = false;
        this.error.confirmation.text = "Text is required.";
      } else {
        this.error.confirmation.isValid = true;
        this.error.confirmation.text = "";
      }
    },
    validateVat() {
      if (this.form.vat === null) {
        this.error.vat.isValid = false;
        this.error.vat.text = "Text is required";
      } else {
        this.error.vat.isValid = true;
        this.error.vat.text = "";
      }
    },
    validateNetto() {
      const checkNetto = /^\d+([,.][0-9]{1,2})?$/;
      if (
        !checkNetto.test(this.form.priceNetto) ||
        this.form.priceNetto === ""
      ) {
        this.error.priceNetto.isValid = false;
        this.error.priceNetto.text = "Please, input number.";
      } else {
        this.error.priceNetto.isValid = true;
        this.error.priceNetto.text = "";
      }
    },
    validateForm() {
      this.validateDescription();
      this.validateConfirmation();
      this.validateVat();
      if (this.form.vat !== null) {
        this.validateNetto();
      }
    },
    submitAgain() {
      this.$store.commit("moduleForm/setSubmit", false);
    },
  },
  computed: {
    priceBrutto() {
      const isNumber = /^[0-9]/;
      if (this.form.priceNetto !== "" && isNumber.test(this.form.priceNetto)) {
        return (
          parseFloat(this.form.priceNetto.replace(",", ".")) +
          parseFloat(this.form.priceNetto.replace(",", ".")) *
            parseFloat(this.form.vat)
        ).toFixed(2);
      } else {
        return "";
      }
    },
    descriptionLength() {
      return this.form.description.length;
    },
  },
};
</script>

<style scoped>
.form-control.invalid input {
  border-color: red;
}
.form {
  height: 100vh;
  width: 100%;
  font-family: "Poppins Light";
  font-size: 18px;
}
</style>
