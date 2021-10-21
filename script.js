'USE STRICT'

const generate = document.getElementById('generate');
const finalQuery = document.getElementById('finalQuery');
const showQuery = document.getElementById('showQuery');

const forms_definitions_uid = document.getElementById('forms_definitions_uid');
const licensee_code = document.getElementById('licensee_code');
// const add_date_time = 'getdate()';
const added_by = document.getElementById('added_by');
const begin_date = document.getElementById('begin_date');
const change_date_time = document.getElementById('change_date_time');
const changed_by = document.getElementById('changed_by');
const end_date = document.getElementById('end_date');
const file_name = document.getElementById('file_name');
const form_code = document.getElementById('form_code');
const form_code_alt = document.getElementById('form_code_alt');
const form_list_order = document.getElementById('form_list_order');
const form_name = document.getElementById('form_name');
const form_name_print = document.getElementById('form_name_print');
const form_number = document.getElementById('form_number');
const group_print_order = document.getElementById('group_print_order');
const include_in_forms_list = document.getElementById('include_in_forms_list');
const internal_use_only_flag = document.getElementById('internal_use_only_flag');
const module = document.getElementById('module');
const object_name = document.getElementById('object_name');
const output_codes = document.getElementById('output_codes');
const owner_object = document.getElementById('owner_object');
const parameters_to_pass = document.getElementById('parameters_to_pass');
const parent_name = document.getElementById('parent_name');
const production_order = document.getElementById('production_order');
const revision_date = document.getElementById('revision_date');
const security_profile_code = document.getElementById('security_profile_code');
const state_code = document.getElementById('state_code');
const sub_parent_name_1 = document.getElementById('sub_parent_name_1');
const sub_parent_name_2 = document.getElementById('sub_parent_name_2');
const sub_parent_name_3 = document.getElementById('sub_parent_name_3');
const sub_parent_name_4 = document.getElementById('sub_parent_name_4');
const user_input_flag = document.getElementById('user_input_flag');
const template_type = document.getElementById('template_type');
const mapping_xml = document.getElementById('mapping_xml');
const product_group = document.getElementById('product_group');
const sign_supported = document.getElementById('sign_supported');
const include_in_merge = document.getElementById('include_in_merge');
const output_file_name_prefix = document.getElementById('output_file_name_prefix');
const form_code_to_print = document.getElementById('form_code_to_print');
const add_date_time = document.getElementById('add_date_time');
const add_date_time_checkbox = document.getElementById('add_date_time_checkbox');
const begin_date_checkbox = document.getElementById('begin_date_checkbox');
const revision_date_checkbox = document.getElementById('revision_date_checkbox');
const change_date_time_checkbox = document.getElementById('change_date_time_checkbox');
const end_date_checkbox = document.getElementById('end_date_checkbox');


add_date_time_checkbox.addEventListener('click', ()=> { 
    if(!add_date_time_checkbox.checked) {
        add_date_time.disabled = true;
        add_date_time.value = undefined;
    } else {
        add_date_time.disabled = false;
    }
});

begin_date_checkbox.addEventListener('click', ()=> { 
    if(!begin_date_checkbox.checked) {
        begin_date.disabled = true;
        begin_date.value = undefined;
    } else {
        begin_date.disabled = false;
    }
});

revision_date_checkbox.addEventListener('click', ()=> { 
    if(!revision_date_checkbox.checked) {
        revision_date.disabled = true;
        revision_date.value = undefined;
    } else {
        revision_date.disabled = false;
    }
});

change_date_time_checkbox.addEventListener('click', ()=> { 
    if(!change_date_time_checkbox.checked) {
        change_date_time.disabled = true;
        change_date_time.value = undefined;
    } else {
        change_date_time.disabled = false;
    }
});

end_date_checkbox.addEventListener('click', ()=> { 
    if(!end_date_checkbox.checked) {
        end_date.disabled = true;
        end_date.value = undefined;
    } else {
        end_date.disabled = false;
    }
});



const formatDate = (date) => {
    const month = Number(date.split('-')[1][0]) === 0 ? date.split('-')[1][1] : date.split('-')[1];
    const day = Number(date.split('-')[2][0]) === 0 ? date.split('-')[2][1] : date.split('-')[2];
    const year = date.split('-')[0];
    return month + '/' + day + '/' + year; 
};

const generateQuery = (e) => {

    const date = new Date();

    finalQuery.value = 
    `IF NOT EXISTS (SELECT 1 FROM forms_definitions  WHERE   forms_definitions_uid = '${forms_definitions_uid.value.trim()}' and licensee_code = '${licensee_code.value.trim()}')
     BEGIN
     INSERT  INTO forms_definitions ( forms_definitions_uid, licensee_code, add_date_time, added_by, begin_date, change_date_time, 
        changed_by, end_date, file_name, form_code, form_code_alt, form_list_order, form_name, form_name_print, form_number, group_print_order, 
        include_in_forms_list, include_on_policy_dec, internal_use_only_flag, module, object_name, output_codes, owner_object, parameters_to_pass, 
        parent_name, production_order, revision_date, security_profile_code, state_code, sub_parent_name_1, sub_parent_name_2, sub_parent_name_3, 
        sub_parent_name_4, user_input_flag, template_type, mapping_xml, product_group, sign_supported, include_in_merge, output_file_name_prefix, form_code_to_print)

        VALUES ('${forms_definitions_uid.value.trim()}', '${licensee_code.value.trim()}', ${!add_date_time.value ? 'getdate()' : formatDate(add_date_time.value)}, '${added_by.value.trim()}', '${!begin_date.value ? `1/1/${date.getFullYear()}` : formatDate(begin_date.value)}', ${!change_date_time.value ? 'getdate()' : formatDate(change_date_time.value)}, '${changed_by.value.trim()}', ${end_date.value === '' ? 'null' : "'" + formatDate(end_date.value) + "'"}, '${file_name.value.trim()}', '${form_code.value.trim()}', '${form_code_alt.value.trim()}', '${form_list_order.value === '' ? '0' : form_list_order.value}', '${form_name.value.trim()}', '${form_name_print.value.trim()}', '${form_number.value.trim()}', '${group_print_order.value.trim()}', '${include_in_forms_list.value}', '${include_on_policy_dec.value}', '${internal_use_only_flag.value}',
        '${module.value}', '${object_name.value}', '${output_codes.value}', '${owner_object.value}', '${parameters_to_pass.value.trim()}', '${parent_name.value}', '${production_order.value.trim()}', '${!revision_date.value ? 'getdate()' : formatDate(revision_date.value)}', '${security_profile_code.value.trim()}', '${state_code.value}',
         '${sub_parent_name_1.value.trim()}', '${sub_parent_name_2.value.trim()}', '${sub_parent_name_3.value.trim()}', '${sub_parent_name_4.value.trim()}', '${user_input_flag.value}', '${template_type.value}', '${mapping_xml.value.trim()}', '${product_group.value.trim()}', ${sign_supported.value.trim() === '' ? 'NULL' :  "'" + sign_supported.value.trim() + "'"}, ${include_in_merge.value.trim() === '' ? 'NULL' :  "'" + include_in_merge.value.trim() + "'"}, ${output_file_name_prefix.value.trim() === '' ? 'NULL' :  "'" + output_file_name_prefix.value.trim() + "'"}, ${form_code_to_print.value.trim() === '' ? 'NULL' :  "'" + form_code_to_print.value.trim() + "'"})
END    
    `;
        showQuery.classList.remove('d-none');

};

window.addEventListener('keyup', generateQuery);
window.addEventListener('click', generateQuery);


