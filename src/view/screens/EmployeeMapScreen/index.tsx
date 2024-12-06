import React, { useCallback, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  employeesSelector,
  mapListSelector,
} from "@/src/store/slices/selectors";
import { MapViewComponent } from "../../components/MapView";
import EmployeeItem from "../../components/EmployeeItem";
import { Employee } from "@/src/data/types";
import { MainContainer } from "../../components/MainContainer";
import { useNavigation } from "expo-router";
import {
  filterEmployees,
  resetFilters,
  setAppLang,
  setSelectedEmployee,
} from "@/src/store/slices/employeesSlice";
import { styles } from "./styles";
import { AppText } from "@/src/uiKit/AppText";
import { theme } from "../../styles";
import { validationSchema } from "@/src/utils/formSchemas";
import { useFormik } from "formik";
import { getDefaultLocale, Languages, setI18nLang } from "@/src/localize";
import { t } from "i18n-js";

export const EmployeeMapScreen: React.FC = () => {
  const { isActiveButton } = useSelector(mapListSelector);
  const { employees, resetFilter, lang } = useSelector(employeesSelector);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [visible, setIsVisible] = useState(false);
  const [visibleSetting, setIsVisibleSetting] = useState(false);
  const [newLanguage, setNewLanguage] = useState(lang);
  const [selectedLanguage, setSelectedLanguage] = useState(getDefaultLocale());

  const changeLanguage = (language: string) => {
    setSelectedLanguage(selectedLanguage);
    setI18nLang(language);
    setIsVisibleSetting(false);
  };

  const {
    values,
    touched,
    errors,
    resetForm,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      position: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(filterEmployees(values));
      setIsVisible(false);
      resetForm();
    },
  });
  const onHandleItem = useCallback(
    (id: number) => {
      dispatch(setSelectedEmployee(id));
      navigation.navigate("EmployeeDetail", { screen: "EmployeeDetailScreen" });
    },
    [navigation]
  );

  const renderEmployee = ({ item }: { item: Employee }) => (
    <EmployeeItem {...item} onPress={onHandleItem} />
  );

  const handleApplyFilters = useCallback(() => {
    if (resetFilter) {
      dispatch(resetFilters());
    } else {
      setIsVisible(true);
    }
  }, [resetFilter]);

  const setLang = () => {
    setI18nLang(newLanguage);
    dispatch(setAppLang(newLanguage));
  };

  const handleSettings = useCallback(() => {
    setIsVisibleSetting(true);
  }, []);

  return (
    <MainContainer
      withHeader
      handleApplyFilters={handleApplyFilters}
      handleSettings={handleSettings}
    >
      {!!isActiveButton && <MapViewComponent employees={employees} />}
      {!isActiveButton && (
        <FlatList
          data={employees}
          renderItem={renderEmployee}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      <Modal
        transparent
        animationType="fade"
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <>
              <TextInput
                style={styles.input}
                placeholder={t("filter_inputs.name")}
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
              />
              {touched.name && errors.name && (
                <AppText style={styles.errorText}>{errors.name}</AppText>
              )}

              <TextInput
                style={styles.input}
                placeholder={t("filter_inputs.position")}
                value={values.position}
                onChangeText={handleChange("position")}
                onBlur={handleBlur("position")}
              />
              {touched.position && errors.position && (
                <AppText style={styles.errorText}>{errors.position}</AppText>
              )}

              <TextInput
                style={styles.input}
                placeholder={t("filter_inputs.phone")}
                keyboardType="phone-pad"
                value={values.phone}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
              />
              {touched.phone && errors.phone && (
                <AppText style={styles.errorText}>{errors.phone}</AppText>
              )}
            </>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.modalButton}
                onPress={() => handleSubmit()}
              >
                <AppText color={theme.colors.blue} variant="p1">
                  {t("buttons.apply")}
                </AppText>
              </Pressable>
              <Pressable
                style={styles.modalButton}
                onPress={() => setIsVisible(false)}
              >
                <AppText color={theme.colors.negative} variant="p1">
                  {t("buttons.close")}
                </AppText>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={visibleSetting}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsVisibleSetting(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={Languages}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.languageOption}
                  onPress={() => changeLanguage(item.value)}
                >
                  <View style={styles.languageOptionContent}>
                    <AppText>{item.label}</AppText>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </MainContainer>
  );
};
