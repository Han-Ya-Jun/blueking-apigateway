// Code generated by MockGen. DO NOT EDIT.
// Source: app_permission.go

// Package mock is a generated GoMock package.
package mock

import (
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
)

// MockAppPermissionService is a mock of AppPermissionService interface.
type MockAppPermissionService struct {
	ctrl     *gomock.Controller
	recorder *MockAppPermissionServiceMockRecorder
}

// MockAppPermissionServiceMockRecorder is the mock recorder for MockAppPermissionService.
type MockAppPermissionServiceMockRecorder struct {
	mock *MockAppPermissionService
}

// NewMockAppPermissionService creates a new mock instance.
func NewMockAppPermissionService(ctrl *gomock.Controller) *MockAppPermissionService {
	mock := &MockAppPermissionService{ctrl: ctrl}
	mock.recorder = &MockAppPermissionServiceMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockAppPermissionService) EXPECT() *MockAppPermissionServiceMockRecorder {
	return m.recorder
}

// Query mocks base method.
func (m *MockAppPermissionService) Query(instanceID, gatewayName, stageName, resourceName, appCode string) (map[string]int64, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Query", instanceID, gatewayName, stageName, resourceName, appCode)
	ret0, _ := ret[0].(map[string]int64)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Query indicates an expected call of Query.
func (mr *MockAppPermissionServiceMockRecorder) Query(instanceID, gatewayName, stageName, resourceName, appCode interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Query", reflect.TypeOf((*MockAppPermissionService)(nil).Query), instanceID, gatewayName, stageName, resourceName, appCode)
}
