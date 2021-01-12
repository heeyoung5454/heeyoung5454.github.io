<template>
<div class="container-md mt-5" style="min-height:638px">

    <b-container class="w-50 d-inline-block p-3">

        <h1>Contact</h1>
        <p class="text-right text-muted">EmailJS</p>
        <form id="contact-form">
            <input type="hidden" name="contact_number">
     <b-form-group v-for="contact in types" :key="contact" >
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon :icon="`${contact.icon}`"></b-icon>
          </b-input-group-prepend>
          <b-form-input :id="`${contact.name}`" :name="`${contact.name}`" :type="contact.type" :placeholder="`${contact.label} 입력하세요`" ></b-form-input>
        </b-input-group>
      </b-form-group> 

            <b-row class="mt-2">
                <b-col sm="12">
                    <b-form-textarea id="b-message" name="b-message" placeholder="내용을 입력하세요" rows="8"></b-form-textarea>
                </b-col>
            </b-row>


            <div class="text-right mt-5">
                <input type="submit" value="이메일 전송" class="btn btn-outline-primary">
            </div>
        </form>

    </b-container>

    <b-container id="contact_img" class="w-50 d-inline-block text-center bg-dark text-light d-inline-block pt-4 pb-4">

        <b-row class="mt-2 mb-4">
            <b-col class="h1">
                <b-icon icon="person-circle" variant="light"></b-icon>
                <p>JEONG, HEE YOUNG</p>
            </b-col>
        </b-row>
        <b-row class="mt-2 mb-4">
            <b-col class="h1">
                <b-icon icon="envelope" variant="light"></b-icon>
                <p>heeyoung5454@gmail.com</p>
            </b-col>
        </b-row>
        <b-row class="mt-2 mb-4">
            <b-col class="h1">
                <b-icon icon="phone" variant="light"></b-icon>
                <p>010-2028-5430</p>
            </b-col>
        </b-row>

        <b-row class="mt-2 mb-4">
            <b-col class="h1">
                <b-icon icon="chat-fill" variant="light"></b-icon>
                <p>
                    <span>KAKAO ID</span>
                    <br>
                    <span>hee0058</span>
                </p>
            </b-col>
        </b-row>

        <div class="text-right">
          -
        </div>

    </b-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            types: [{
                    name: 'b-name',
                    label: '이름을',
                    type: 'text',
                    icon:'person-fill'
                },
                {
                    name: 'b-tel',
                    label: '연락처를',
                    type: 'text',
                    icon:'telephone-fill'
                },
                {
                    name: 'b-email',
                    label: '이메일을',
                    type: 'email',
                    icon:'envelope-fill'
                }
            ]
        }
    }
}
</script>

<style>
#contact_img .h1 p {
    font-size: 14px;
    margin: 14px 0 0 0;
}

#contact_img .h1 svg {
    width: 48px;
    height: 48px;
}
</style>
