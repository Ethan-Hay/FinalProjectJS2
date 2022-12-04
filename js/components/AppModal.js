app.component('AppModal', {
    props: {
        title: {
            type: String,
            default: 'Modal Title',
        },
        id: {
            type: String,
        }
    },

    mounted(){
        // this.$el refers to the instance of this component in the dom
        this.$el.addEventListener('shown.bs.modal', function(){
            // this.querySelector('form input:first-child') // this is reusable, but not flexible
            this.querySelector('[autofocus]')?.focus();
            // is equivalent to :
            // if(this.querySelector('[autofocus]')){
            //     this.querySelector('[autofocus]').focus();
            // }
        });
    },

    template: `
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" :aria-labelledby="id + '-modalTitle'" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <form>
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" :id="id + '-modalTitle'">{{ title }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </slot>
                    </div>
                </div>
            </form>
        </div>
    </div>
    `
})