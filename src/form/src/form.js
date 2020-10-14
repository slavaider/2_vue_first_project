
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
export default {
  name: 'src-form',
  data() {
    return {
      email: "",
      submitStatus: null,
      password: "",
      repeatPassword: ""
    };
  },
  validations: {
    email: {
      email,
      required,
      uniqueEmail(new_email) {
        if (new_email === '') return true;
        return new Promise((resolve) => {
          setTimeout(() => {
            const value = new_email !== '3@mail.ru';
            resolve(value);
          }, 1000);
        });
      }
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs((vue) => {
        return vue.password
      })
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        alert("not submit!");
      } else {
        alert("submit!");
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
          this.email = this.password = this.repeatPassword = '';
        }, 500);
      }

    }
  }
}


