<template>
  <div>
    <div class="banner">
      <img :src="bannerImg" alt="banner" />
    </div>
    <div class="main">
      <div class="top">
        <div class="flex-row align-items-center">
          <bk-input
            class="search-input"
            :placeholder="t('请输入 MCP 名称或描述搜索')"
            v-model="search"
            :clearable="true"
            @enter="getList"
            @blur="getList"
            @clear="getList"
            type="search"
          />
          <!-- <bk-checkbox v-model="isPublic">{{ t('仅展示官方') }}</bk-checkbox> -->
        </div>

        <!-- <div class="guide">
          <ag-icon name="document" size="14" />
          <span>{{ t('使用指引') }}</span>
        </div> -->
      </div>
      <div class="card-list" v-if="mcpList?.length">
        <div class="card" @click="goDetails(item.id)" v-for="item in mcpList" :key="item.id">
          <div class="header">
            <bk-overflow-title class="title" style="max-width: calc(100% - 115px)">
              {{ item.name }}
            </bk-overflow-title>
            <bk-tag theme="success" class="mr8" v-if="item.gateway.is_official">{{ t('官方') }}</bk-tag>
            <bk-tag theme="info">{{ item.stage?.name }}</bk-tag>
          </div>
          <div class="content">
            <div class="info-item">
              <div class="label">{{ t('访问地址') }}：</div>
              <div class="value flex-row align-items-center">
                <bk-overflow-title style="width: calc(100% - 28px)">{{ item.url }}</bk-overflow-title>
                <div class="copy-wrapper" @click.stop="handleCopy(item.url)">
                  <ag-icon name="copy" size="14" class="icon" />
                </div>
              </div>
            </div>
            <div class="info-item">
              <div class="label">{{ t('工具数量') }}：</div>
              <div class="value">{{ item.tools_count }}</div>
            </div>
            <div class="info-item">
              <div class="label">{{ t('描述') }}：</div>
              <div class="value">{{ item.description }}</div>
            </div>
            <div class="info-item">
              <div class="label">{{ t('标签') }}：</div>
              <div class="value">
                <bk-tag class="mr8" v-for="label in item.labels" :key="label">{{ label }}</bk-tag>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="empty-wrapper" v-else>
        <TableEmpty
          :keyword="tableEmptyConf.keyword"
          :abnormal="tableEmptyConf.isAbnormal"
          @reacquire="getList"
          @clear-filter="handleClearFilterKey"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import AgIcon from '@/components/ag-icon.vue';
import { getMcpMarketplace, IMarketplaceItem } from '@/http/mcp-market';
import { copy } from '@/common/util';
// @ts-ignore
import mcpBanner from '@/images/mcp-banner.jpg';
import TableEmpty from '@/components/table-empty.vue';

const { t } = useI18n();
const router = useRouter();

const search = ref<string>('');
const isPublic = ref<boolean>(false);
const mcpAllList = ref<IMarketplaceItem[]>([]);
const tableEmptyConf = ref<{keyword: string, isAbnormal: boolean}>({
  keyword: '',
  isAbnormal: false,
});

const bannerImg = computed(() => {
  return mcpBanner;
});

const mcpList = computed(() => {
  const list = mcpAllList.value.filter((item: IMarketplaceItem) => {
    if (isPublic.value) {
      return item.gateway.is_official;
    }
    return true;
  });
  updateTableEmptyConfig();
  return list;
});

const getList = async () => {
  const res = await getMcpMarketplace({
    limit: 999,
    offset: 0,
    keyword: search.value,
  });

  // res.count
  mcpAllList.value = res.results;
};
getList();

const handleCopy = (str: string) => {
  copy(str);
};

const goDetails = (id: number) => {
  router.push({
    name: 'mcpMarketDetails',
    params: {
      id,
    },
  });
};

const updateTableEmptyConfig = () => {
  if (search.value) {
    tableEmptyConf.value.keyword = 'placeholder';
    return;
  }
  tableEmptyConf.value.keyword = '';
};

const handleClearFilterKey = async () => {
  search.value = '';
  getList();
};

</script>

<style lang="scss" scoped>
.banner {
  img {
    width: 100%;
  }
}

.main {
  padding: 0px 120px 26px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;

    .search-input {
      width: 800px;
      margin-right: 12px;
    }

    .guide {
      color: #3A84FF;
      cursor: pointer;
      font-size: 12px;
    }
  }

  .card-list {
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
    .card {
      width: calc(33.33% - 18px);
      border-radius: 2px;
      background: #FFFFFF;
      box-shadow: 0 2px 4px 0 #1919290d;
      padding: 0 24px;
      box-sizing: border-box;
      cursor: pointer;
      .header {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #EAEBF0;
        height: 54px;
        .title {
          color: #313238;
          font-size: 20px;
          font-weight: Bold;
          line-height: 54px;
          margin-right: 16px;
        }
      }
      .content {
        padding: 12px 0 4px;
        .info-item {
          display: flex;
          align-items: center;
          margin-bottom: 18px;
          .label {
            font-size: 14px;
            color: #4D4F56;
          }
          .value {
            flex: 1;
            font-size: 14px;
            color: #313238;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .copy-wrapper {
              width: 28px;
              text-align: right;
            }
            .icon {
              color: #3A84FF;
            }
          }
        }
      }
    }
  }

  .empty-wrapper {
    padding-top: 120px;
  }
}


</style>
