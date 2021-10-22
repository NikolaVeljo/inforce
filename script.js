'USE STRICT'

const generate = document.getElementById('generate');
const finalQuery = document.getElementById('finalQuery');
const showQuery = document.getElementById('showQuery');
const main_menu = document.getElementById('main_menu');

const forms_definitions_uid = document.getElementById('forms_definitions_uid');
const forms_definitions = document.getElementById('forms_definitions');
const licensee_code = document.getElementById('licensee_code');
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
const forms_definitions_pointers = document.getElementById('forms_definitions_pointers');
const editable_flag = document.getElementById('editable_flag');
const generate_pointers = document.getElementById('generate_pointers');

const forms_definitions_menu = document.getElementById('forms_definitions_menu');
const forms_definitions_pointers_menu = document.getElementById('forms_definitions_pointers_menu');
const add_pointers = document.getElementById('add_pointers');

/////////////  POINTERS ////////////////

const forms_definitions_pointers_uid = document.getElementById('forms_definitions_pointers_uid');
const lookup_column = document.getElementById('lookup_column');
const lookup_list = document.getElementById('lookup_list');
const lookup_object = document.getElementById('lookup_object');
const lookup_order = document.getElementById('lookup_order');
const lookup_query = document.getElementById('lookup_query');
const pointer_table_name = document.getElementById('pointer_table_name');
const print_flag = document.getElementById('print_flag');
const question_order = document.getElementById('question_order');
const question_text = document.getElementById('question_text');
const question_text_print = document.getElementById('question_text_print');
const required_flag = document.getElementById('required_flag');
const response_code_group = document.getElementById('response_code_group');
const response_default = document.getElementById('response_default');
const response_example_text = document.getElementById('response_example_text');
const response_size = document.getElementById('response_size');
const response_type = document.getElementById('response_type');
const visible_flag = document.getElementById('visible_flag');


                    
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

main_menu.addEventListener('click', (e) => {
    // console.log(e.target.id);
    if(e.target.id === 'forms_definitions_menu') {
        forms_definitions.classList.remove('d-none');
        forms_definitions_pointers.classList.add('d-none');
        forms_definitions_menu.style.color = '#ff8400';
        forms_definitions_pointers_menu.style.color = 'white';
    }
    else if (e.target.id === 'forms_definitions_pointers_menu') {
        forms_definitions.classList.add('d-none');
        forms_definitions_pointers.classList.remove('d-none');
        forms_definitions_menu.style.color = 'white';
        forms_definitions_pointers_menu.style.color = '#ff8400';
    }
    else return;
});

const formatDate = (date) => {
    const month = Number(date.split('-')[1][0]) === 0 ? date.split('-')[1][1] : date.split('-')[1];
    const day = Number(date.split('-')[2][0]) === 0 ? date.split('-')[2][1] : date.split('-')[2];
    const year = date.split('-')[0];
    return month + '/' + day + '/' + year; 
};

const splitedValue = (data) => data.value.split(',').map(x => x.trim()); 


const generatePointers = (e) => {

    let forms_definitions_pointers_uid_array = splitedValue(forms_definitions_pointers_uid)
    let lookup_column_array = splitedValue(lookup_column)
    let lookup_list_array = splitedValue(lookup_list)
    let lookup_object_array = splitedValue(lookup_object)
    let lookup_order_array = splitedValue(lookup_order)
    let lookup_query_array = splitedValue(lookup_query)
    let pointer_table_name_array = splitedValue(pointer_table_name)
    let print_flag_array = splitedValue(print_flag)
    let question_order_array = splitedValue(question_order)
    let question_text_array = splitedValue(question_text)
    let question_text_print_array = splitedValue(question_text_print)
    let required_flag_array = splitedValue(required_flag)
    let response_code_group_array = splitedValue(response_code_group)
    let response_default_array = splitedValue(response_default)
    let response_example_text_array = splitedValue(response_example_text)
    let response_size_array = splitedValue(response_size)
    let response_type_array = splitedValue(response_type)
    let visible_flag_array = splitedValue(visible_flag)


    while (add_pointers.firstChild) {
            add_pointers.removeChild(add_pointers.firstChild);
        };

        editable_flag.value.split(',').map(x =>x.trim()).map((y, id) => {
        const html = `
        <textarea cols="195" rows="19" placeholder="Autogenerated field" class="mt-2 mb-2">    
        IF NOT EXISTS ( SELECT 1 FROM forms_definitions_pointers  WHERE   forms_definitions_pointers_uid = '${forms_definitions_pointers_uid_array[id]}' and licensee_code = '${licensee_code.value.trim()}')
BEGIN
   INSERT  INTO forms_definitions_pointers (forms_definitions_pointers_uid,licensee_code,add_date_time,added_by,change_date_time,changed_by,editable_flag,lookup_column,lookup_list,lookup_object,lookup_order,lookup_query,pointer_table_name,pointer_table_uid,print_flag,question_order,question_text,question_text_print,required_flag,response_code_group,response_default,response_example_text,response_size,response_type,visible_flag)
		   VALUES ('${forms_definitions_pointers_uid_array[id]}', '${licensee_code.value.trim()}', ${!add_date_time.value ? 'getdate()' : "'" + formatDate(add_date_time.value) + "'"}, '${added_by.value}', ${!change_date_time.value ? 'getdate()' : "'" + formatDate(change_date_time.value) + "'"}, '${changed_by.value}', '${y}','${lookup_column_array[id]}', '${lookup_list_array[id]}', '${lookup_object_array[id]}' ,'${lookup_order_array[id]}', '${lookup_query_array[id]}', '${pointer_table_name_array[id]}','${forms_definitions_uid.value.trim()}','${print_flag_array[id]}', ${question_order_array[0]}, '${question_text_array[id]}','${question_text_print_array[id]}','${required_flag_array[id]}','${response_code_group_array[id]}', '${response_default_array[id]}', ${response_example_text_array[id] === '' ? '\'$nnn,nnn,nnn\'' : "'" + response_example_text_array[id] + "'"}, ${response_size_array[id]}, '${response_type_array[id]}', '${visible_flag_array[id]}')
END
ELSE
BEGIN
   UPDATE forms_definitions_pointers SET licensee_code='${licensee_code.value.trim()}',added_by='${added_by.value}',change_date_time=${!change_date_time.value ? 'getdate()' : "'" + formatDate(change_date_time.value) + "'"},changed_by='${changed_by.value}',editable_flag='${y}',lookup_column='${lookup_column_array[id]}',lookup_list='${lookup_list_array[id]}',lookup_object='${lookup_object_array[id]}',lookup_order='${lookup_order_array[id]}',lookup_query='${lookup_query_array[id]}',pointer_table_name='${pointer_table_name_array[id]}',pointer_table_uid='${forms_definitions_uid.value.trim()}',print_flag='${print_flag_array[id]}',question_order=${question_order_array[0]},question_text='${question_text_array[id]}',question_text_print='${question_text_print_array[id]}',required_flag='${required_flag_array[id]}',response_code_group='${response_code_group_array[id]}',response_default='${response_default_array[id]}',response_example_text='${response_example_text_array[id] === '' ? '\'$nnn,nnn,nnn\'' : "'" + response_example_text_array[id] + "'"}',response_size=${response_size_array[id]},response_type='${response_type_array[id]}',visible_flag='${visible_flag_array[id]}'
    FROM forms_definitions_pointers WHERE  forms_definitions_pointers_uid = '${forms_definitions_pointers_uid_array[id]}' and licensee_code = '${licensee_code.value.trim()}'
END
GO
</textarea>
        `
        add_pointers.insertAdjacentHTML('beforeend', html);
    });
   
    
};

const generateQuery = (e) => {

    const date = new Date();

    finalQuery.value = 
    `IF NOT EXISTS (SELECT 1 FROM forms_definitions  WHERE   forms_definitions_uid = '${forms_definitions_uid.value.trim()}' and licensee_code = '${licensee_code.value.trim()}')
     BEGIN
     INSERT INTO forms_definitions ( forms_definitions_uid, licensee_code, add_date_time, added_by, begin_date, change_date_time, 
                 changed_by, end_date, file_name, form_code, form_code_alt, form_list_order, form_name, form_name_print, form_number, group_print_order, 
                 include_in_forms_list, include_on_policy_dec, internal_use_only_flag, module, object_name, output_codes, owner_object, parameters_to_pass, 
                 parent_name, production_order, revision_date, security_profile_code, state_code, sub_parent_name_1, sub_parent_name_2, sub_parent_name_3, 
                 sub_parent_name_4, user_input_flag, template_type, mapping_xml, product_group, sign_supported, include_in_merge, output_file_name_prefix, form_code_to_print)
    
      VALUES     ('${forms_definitions_uid.value.trim()}', '${licensee_code.value.trim()}', ${!add_date_time.value ? 'getdate()' : "'" + formatDate(add_date_time.value) + "'"}, '${added_by.value.trim()}', '${!begin_date.value ? `1/1/${date.getFullYear()}` : formatDate(begin_date.value)}', ${!change_date_time.value ? 'getdate()' : "'" + formatDate(change_date_time.value) + "'"}, '${changed_by.value.trim()}', ${end_date.value === '' ? 'null' : "'" + formatDate(end_date.value) + "'"}, '${file_name.value.trim()}', '${form_code.value.trim()}', '${form_code_alt.value.trim()}', '${form_list_order.value === '' ? '0' : form_list_order.value}', '${form_name.value.trim()}', '${form_name_print.value.trim()}', '${form_number.value.trim()}', '${group_print_order.value.trim()}', '${include_in_forms_list.value}', '${include_on_policy_dec.value}', '${internal_use_only_flag.value}', '${module.value}', '${object_name.value}', '${output_codes.value}', '${owner_object.value}', '${parameters_to_pass.value.trim()}', '${parent_name.value}', '${production_order.value.trim()}', '${!revision_date.value ? 'getdate()' : formatDate(revision_date.value)}', '${security_profile_code.value.trim()}', '${state_code.value}', '${sub_parent_name_1.value.trim()}', '${sub_parent_name_2.value.trim()}', '${sub_parent_name_3.value.trim()}', '${sub_parent_name_4.value.trim()}', '${user_input_flag.value}', '${template_type.value}',
       '${mapping_xml.value.trim()}', '${product_group.value.trim()}', ${sign_supported.value.trim() === '' ? 'NULL' :  "'" + sign_supported.value.trim() + "'"}, ${include_in_merge.value.trim() === '' ? 'NULL' :  "'" + include_in_merge.value.trim() + "'"}, ${output_file_name_prefix.value.trim() === '' ? 'NULL' :  "'" + output_file_name_prefix.value.trim() + "'"}, ${form_code_to_print.value.trim() === '' ? 'NULL' :  "'" + form_code_to_print.value.trim() + "'"})
END`;
   showQuery && showQuery.classList.remove('d-none');

};

window.addEventListener('keyup', generateQuery);
window.addEventListener('click', generateQuery);
generate_pointers && generate_pointers.addEventListener('click', generatePointers);



