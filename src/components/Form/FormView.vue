<template>
  <div
    class="container-fluid form d-flex align-items-center justify-content-center"
  >
    <div
      class="row col-xxl-4 col-xl-6 col-md-8 col-sm-10 p-5 bg-light bg-gradient"
    >
      <form v-if="!isSubmited" @submit.prevent="submitForm">
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
          @custom-change="handleCustomChange"
          name="confirm"
          text="Yes"
          :value="true"
          @change="validateConfirmation"
        ></radio-button>
        <radio-button
          id="confirmFalse"
          name="confirm"
          :value="false"
          @custom-change="handleCustomChange"
          v-model="form.confirmation"
          @change="validateConfirmation"
          text="No"
        ></radio-button>
        <error-view
          :isValid="error.confirmation.isValid"
          :text="error.confirmation.text"
        ></error-view>
        <select-view
          v-model="form.vat"
          id="vat"
          name="vat"
          title="Vat"
          :isValid="error.vat.isValid"
          text="Choose VAT"
        ></select-view>
        <error-view
          :isValid="error.vat.isValid"
          :text="error.vat.text"
        ></error-view>
        <text-field
          text="Price netto EUR"
          :isDisabled="form.vat !== null ? false : true"
          v-model="form.priceNetto"
        ></text-field>
        <text-field
          text="Price brutto EUR"
          v-model="priceBrutto"
          :isDisabled="true"
        ></text-field>
        <button-view></button-view>
      </form>
      <div v-if="isSubmited">
        {{ form }}
      </div>
    </div>
  </div>
</template>

<script>
import AreaText from "@/components/Form/UI/AreaText.vue";
import RadioButton from "@/components/Form/UI/RadioButton.vue";
import TextField from "@/components/Form/UI/TextField.vue";
import ButtonView from "@/components/Form/UI/ButtonView.vue";
import ErrorView from "@/components/validation/ErrorView.vue";
import SelectView from "./UI/SelectView.vue";
export default {
  components: {
    AreaText,
    RadioButton,
    ButtonView,
    TextField,
    ErrorView,
    SelectView,
  },
  data() {
    return {
      isValid: true,
      form: {
        description: "",
        confirmation: null,
        vat: null,
        priceNetto: null,
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
      },
      maxLength: 255,
    };
  },
  methods: {
    submitForm() {
      this.validateForm();
      if (
        this.error.description.isValid === false ||
        this.error.confirmation.isValid === false
      ) {
        return;
      }
      this.isSubmited = true;
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
    handleCustomChange(e) {
      this.form.confirmation = e;
    },
    validateForm() {
      this.validateDescription();
      this.validateConfirmation();
      this.validateVat();
    },
  },
  computed: {
    priceBrutto() {
      if (this.form.priceNetto !== "") {
        console.log(this.form.priceNetto);
        console.log(typeof this.form.priceNetto);
        return (
          parseFloat(this.form.priceNetto) +
          parseFloat(this.form.priceNetto) * parseFloat(this.form.vat)
        );
      } else {
        return null;
      }
    },
    descriptionLength() {
      return this.form.description.length;
    },
  },
};
</script>

<style scoped>
.block {
  display: block;
}
.form-control.invalid input {
  border-color: red;
}
.form {
  height: 100vh;
  width: 100%;
}
.form-label.invalid {
  color: red;
}
</style>
