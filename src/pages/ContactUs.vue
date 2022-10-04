<script lang="ts" setup>
import LocateMap from "../components/LocateMap.vue";
import { ref, reactive } from "vue";
import type { FormInstance } from "element-plus";

const validateEmail = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the email"));
  } else if (value.indexOf("@") == -1) {
    callback(new Error("Please input correct email address"));
  } else if (value.indexOf(".") == -1) {
    callback(new Error("Please input correct email address"));
  } else {
    callback();
  }
};

const validateName = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the Name"));
  } else {
    callback();
  }
};

const validateMessage = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please write your message"));
  }
};

const SubmitMessage = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("Submit!");
    } else {
      console.log("Error Submit!", fields);
    }
  });
};

const ruleForm = reactive({
  Email: "",
  Name: "",
  Message: "",
});

const rules = reactive({
  Email: [{ validator: validateEmail, trigger: "blur" }],
  Name: [{ validator: validateName, trigger: "blur" }],
  Message: [{ validator: validateMessage, trigger: "blur" }],
});

const ruleFormRef = ref<FormInstance>();
</script>
<template>
  <div class="bg-[#19161B]">
    <div class="container mx-auto flex gap-12 py-36 main-div--ContactUs">
      <div class="flex flex-col gap-8 w-2/3 first-div--ContactUs">
        <h1
          class="text-white font-bold font-['Playfair_Display'] first-title--ContactUs text-[3rem] leading-normal whitespace-nowrap"
        >
          Have a Question ?<br />
          Get in Touch with us 👋
        </h1>
        <div class="text-[#BBBBBB]">
          Fill up the Form and ou team will get back to within 24 hrs
        </div>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          class="form--ContactUs flex flex-col gap-6"
          ><div class="grid grid-cols-2 div-two-input--Footer gap-8">
            <el-form-item prop="Name"
              ><el-input
                v-model="ruleForm.Name"
                placeholder="Name"
                class="pb-4"
            /></el-form-item>
            <el-form-item prop="Email"
              ><el-input
                v-model="ruleForm.Email"
                placeholder="Email"
                class="pb-4"
            /></el-form-item>
          </div>
          <el-form-item prop="Message"
            ><el-input
              v-model="ruleForm.Message"
              type="textarea"
              :rows="7"
              resize="none"
              placeholder="Message"
              class="pb-4"
          /></el-form-item>
          <el-form-item class="btn-ContactUs">
            <el-button @click="SubmitMessage(ruleFormRef)">
              <div class="flex items-center gap-4">
                <span class="text-white">Send Message</span>
                <el-icon :size="25"><Right class="text-[#FFB577]" /></el-icon>
              </div>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="grid grid-cols-2 gap-12">
        <el-image
          src="/src/assets/first_pic_ContactUs.png"
          class="pt-20 first-image--ContactUs"
        />
        <el-image
          src="/src/assets/second_pic_ContactUs.png"
          class="pb-20 first-image--ContactUs"
        />
      </div>
    </div>
    <LocateMap class="container mx-auto" />
  </div>
</template>
